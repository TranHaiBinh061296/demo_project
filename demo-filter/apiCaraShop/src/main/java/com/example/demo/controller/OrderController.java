package com.example.demo.controller;


import com.example.demo.entity.Orders;
import com.example.demo.entity.Users;
import com.example.demo.repositories.UsersRepository;
import com.example.demo.response.ResponseObject;
import com.example.demo.repositories.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/orders")
public class OrderController {

    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private UsersRepository usersRepository;

    @GetMapping("")
    ResponseEntity<ResponseObject> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Ok", "Query success ", ordersRepository.findAll())
        );
    }


    // get One
    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> getOne(@PathVariable("id") int id){
        Optional<Orders> orders = ordersRepository.findById(id);
        if(orders.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Ok", "Query successfully", orders)
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Bad", "Not found order with id: ", id)
        );
    }

    // add (1 customer có nhiều order)
    @PostMapping("/{idUser}")
    ResponseEntity<ResponseObject> insertOrder(@PathVariable("idUser")int idUser,  @RequestBody Orders orders){
        Users users = usersRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException("Not Exists" + idUser));
        orders.setUsers(users);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Insert Order successfully", ordersRepository.save(orders))
        );
    }

    // delete
    @DeleteMapping("users/{userId}/orders")
    ResponseEntity<ResponseObject> deleteOrder(@PathVariable("userId") int userId){
        Orders userOrder = usersRepository.finByOrdersSetById(userId);
        if(userOrder.getId() > 0){
            ordersRepository.deleteById(userOrder.getId());
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Ok", "delete success", "")
            );
        }else {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                    new ResponseObject("Bad", "not found order with: " + userId, "")
            );
        }
    }

}
