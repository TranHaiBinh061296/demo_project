package com.example.demo.controller;


import com.example.demo.entity.Users;
import com.example.demo.repositories.UsersRepository;
import com.example.demo.response.ResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UsersRepository usersRepository;

    //GetAll
    @GetMapping("")
    List<Users> getAllCustomerLogins() {
        return usersRepository.findAll();
    }


    //Get One
    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> getOne(@PathVariable int id) {
        Optional<Users> foundUsers= usersRepository.findById(id);
        if (foundUsers.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Ok", "Query successfully", foundUsers)
            );
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Bad", "Cannot found users with id: " + id, "")
            );
        }
    }

    //Add
    @PostMapping(value = "")
    ResponseEntity<ResponseObject> insertNewCusLogin(@RequestBody Users newCustomerLogin) {
        // check email trùng
        List<Users> customerLoginList = usersRepository.findByEmail(newCustomerLogin.getEmail());
        if (customerLoginList.size() > 0) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                    new ResponseObject("Bad", "email exists", "")
            );
        } else {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Ok", "add new successfully", usersRepository.save(newCustomerLogin))
            );
        }
    }

    //Update or add
    @PutMapping("/{id}")
    ResponseEntity<ResponseObject> updateCusLogin(@PathVariable int id, @RequestBody Users users) {
        Users update = usersRepository.findById(id)
                .map(user -> {
                    user.setEmail(users.getEmail());
                    user.setPw(users.getPw());
                    user.setFirstName(users.getFirstName());
                    user.setLastName(users.getLastName());
                    user.setPhoneNumber(users.getPhoneNumber());
                    return usersRepository.save(user);
                }).orElseGet(() -> {
                    return usersRepository.save(users);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Ok", "Update successfully", "")
        );
    }

    //delete
    @DeleteMapping("/{id}")
    ResponseEntity<ResponseObject> deleteCate(@PathVariable int id) {
        boolean exists = usersRepository.existsById(id);
        if (exists) {
            usersRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("OK", "Delete users successfully", "")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Bad", "Cannot find users to delete with id: " + id, "")
        );
    }

    //Login
    @PostMapping("/login")
    ResponseEntity<ResponseObject> LoginPage(@RequestParam(value = "email") String email, @RequestParam("password") String password){
        Users users = usersRepository.findByUser(email, password);

        if(users != null){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Ok", "Login Success", users)
            );
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Bad", "Login failed", "")
        );
    }

}