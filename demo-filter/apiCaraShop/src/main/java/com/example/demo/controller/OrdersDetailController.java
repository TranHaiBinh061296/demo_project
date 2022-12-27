package com.example.demo.controller;


import com.example.demo.entity.Orders;
import com.example.demo.entity.OrdersDetail;
import com.example.demo.entity.Products;
import com.example.demo.repositories.OrdersDetailRepository;
import com.example.demo.repositories.OrdersRepository;
import com.example.demo.repositories.ProductRepository;
import com.example.demo.response.ResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1")
public class OrdersDetailController {

    @Autowired
    private OrdersDetailRepository ordersDetailRepository;
    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private ProductRepository productRepository;

    // get All orders
    @GetMapping("/orderdetail")
    ResponseEntity<ResponseObject> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Ok", "Query success ", ordersDetailRepository.findAll())
        );
    }

    // get order detail in order
    @GetMapping("/orders/{ordersId}/detail")
    ResponseEntity<ResponseObject> getOne(@PathVariable("ordersId") int ordersId){
        OrdersDetail ordersDetail = ordersDetailRepository.findByOrdersId(ordersId);
        if (ordersDetail != null){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("OK", "Query success", ordersDetailRepository.findById(ordersId))
            );
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Bad", "Orders not exists", "")
        );
    }

    // add
    @PostMapping("/orders/{ordersId}/products/{proId}")
    ResponseEntity<ResponseObject> add(@PathVariable("ordersId") int ordersId, @PathVariable("proId") int proId, @RequestBody OrdersDetail detail){
        Optional<Orders> orders = ordersRepository.findById(ordersId);
        Optional<Products> products = productRepository.findById(proId);
        if(orders.isPresent() && products.isPresent()){
            detail.setOrders(orders.get());
            detail.setProducts(products.get());
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("OK", "Insert success", ordersDetailRepository.save(detail))
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                new ResponseObject("BAD", "Not exists ", "")
        );
    }
}
