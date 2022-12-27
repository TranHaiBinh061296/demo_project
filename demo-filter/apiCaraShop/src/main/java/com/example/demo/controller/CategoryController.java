package com.example.demo.controller;

import com.example.demo.entity.Categories;
import com.example.demo.entity.Products;
import com.example.demo.response.ResponseObject;
import com.example.demo.repositories.CategoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/categories")
@CrossOrigin
public class CategoryController {

    @Autowired
    private CategoriesRepository repository;


    // get all
    @GetMapping("")
    ResponseEntity<ResponseObject> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Ok", "Query Categories Success", repository.findAll())
        );
    }

    // get one
    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> findByCate(@PathVariable int id){
        Optional<Categories> foundCate = repository.findById(id);
        if(foundCate.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Ok", "Query Categories success", foundCate)
            );
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("bad", "Cannot not found Categories with:= " + id, "")
            );
        }
    }

    // insert
    // Postman: Raw, JSON
    @PostMapping("")
    ResponseEntity<ResponseObject> insertCate(@RequestBody Categories newCate){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Insert Categories successfully", repository.save(newCate))
        );
    }

    // update or add
    @PutMapping("/{id}")
    ResponseEntity<ResponseObject> updateCate(@RequestBody Categories newCate, @PathVariable int id){
        Categories updateCate = repository.findById(id)
                .map(cate -> {
                    cate.setName(newCate.getName());
                    cate.setDescription(newCate.getDescription());
                    return repository.save(cate);
                }).orElseGet(() -> {
                    return repository.save(newCate);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Update categories successfully", updateCate)
        );
    }

    //delete
    @DeleteMapping("/{id}")
    ResponseEntity<ResponseObject> deleteCate(@PathVariable int id){
        boolean exists = repository.existsById(id);
        Categories categories = repository.getById(id);
        List<Products> productsList = categories.getProductsList();
        if(exists && productsList.isEmpty()){
            repository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("OK", "Delete Categories successfully", "")
            );
        }
        if(exists && productsList.size() > 0){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Waiting", "Product exists in Categories", productsList)
            );
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Bad", "Cannot find Categories to delete", "")
        );
    }
}


