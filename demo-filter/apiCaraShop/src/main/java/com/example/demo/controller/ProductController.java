package com.example.demo.controller;


import com.example.demo.response.APIResponse;
import com.example.demo.entity.Categories;
import com.example.demo.entity.Products;
import com.example.demo.response.ResponseObject;
import com.example.demo.repositories.CategoriesRepository;
import com.example.demo.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/products")
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductRepository repository;
    @Autowired
    private CategoriesRepository categoriesRepository;

    // get all
    @GetMapping("")
    List<Products> getAllProduct() {
        return repository.findAll();
    }

    //get Product by CateId
    @GetMapping("/category/{cateId}")
    List<Products> getAllProductByIdCate(@PathVariable int cateId){
        return repository.findProductByCate(cateId);
    }

    // get one
    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> findByProduct(@PathVariable int id){
        Optional<Products> foundProduct = repository.findById(id);
        if(foundProduct.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Ok", "Query product success", foundProduct)
            );
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("bad", "Cannot not found product with:= " + id, "")
            );
        }
    }

    // insert
    // Postman: Raw, JSON

    @PostMapping( value = "categories/{idCate}/products")
    ResponseEntity<ResponseObject> insertProduct(@PathVariable("idCate") int idCate, @RequestBody Products newProduct){
        Categories categoriesList = categoriesRepository.findById(idCate)
                .orElseThrow(() -> new RuntimeException("Not Exists" + idCate));
        newProduct.setCategories(categoriesList);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Insert product successfully", repository.save(newProduct))
        );
    }

    // update or insert
    @PutMapping("/{id}")
    ResponseEntity<ResponseObject> updateProduct(@RequestBody Products newProduct, @PathVariable int id){
        Products updateProduct = repository.findById(id)
                .map(product -> {
                    product.setProductName(newProduct.getProductName());
                    product.setPrice(newProduct.getPrice());
                    product.setDescr(newProduct.getDescr());
                    product.setImageUrl(newProduct.getImageUrl());
                    product.setStock(newProduct.getStock());
                    return repository.save(product);
                }).orElseGet(() -> {
                    return  repository.save(newProduct);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Update product successfully", updateProduct)
        );
    }

    //delete
    @DeleteMapping("/{id}")
    ResponseEntity<ResponseObject> deleteProduct(@PathVariable int id){
        boolean exists = repository.existsById(id);
        if(exists){
            repository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("OK", "Delete product successfully", "")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Bad", "Cannot find product to delete", "")
        );
    }

    //findByProductName
    @GetMapping("/search_name")
    ResponseEntity<ResponseObject> findByProductName(@RequestParam String name){
        List<Products> productsList = repository.findByProductName(name);
        if (productsList.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Not found", "Can not find product with name: " + name, "")
            );
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Ok","query successfully", productsList)
            );
        }
    }

    //Sorting by filed
    @GetMapping("/sorting/{field}")
    private APIResponse<List<Products>> getProductWithSort(@PathVariable String field){
        List<Products> allProducts = repository.findAll(Sort.by(Sort.Direction.ASC,field));
        return new APIResponse<>(allProducts.size(), allProducts);
    }

    //Pagination
    @GetMapping("/pagination/{offset}/{pageSize}")
    private APIResponse<List<Products>> getProductWithPagination(@PathVariable int offset, @PathVariable int pageSize){
        Page<Products> productsWithPagination = repository.findAll(PageRequest.of(offset, pageSize));
        return new APIResponse(productsWithPagination.getSize(), productsWithPagination);
    }

    //Pagination and Sorting
    @GetMapping("/paginationAndSort/{offset}/{pageSize}/{filed}")
    private APIResponse<List<Products>> getProductWithPaginationAndSort(@PathVariable int offset, @PathVariable int pageSize, @PathVariable String filed){
        Page<Products> productsWithPagination = repository.findAll(PageRequest.of(offset, pageSize).withSort(Sort.by(filed)));
        return new APIResponse(productsWithPagination.getSize(), productsWithPagination);
    }
}
