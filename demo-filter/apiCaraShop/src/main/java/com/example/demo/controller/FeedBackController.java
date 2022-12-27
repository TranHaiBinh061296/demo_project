package com.example.demo.controller;

import com.example.demo.entity.FeedBack;
import com.example.demo.repositories.FeedBackRepository;
import com.example.demo.response.ResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/feedback")
public class FeedBackController {

    @Autowired
    private FeedBackRepository feedBackRepository;

    //getAll
    @GetMapping("")
    ResponseEntity<ResponseObject> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Ok", "Query success ", feedBackRepository.findAll())
        );
    }

    //getOne
    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> getOne(@PathVariable int id){
        Optional<FeedBack> feedBack = feedBackRepository.findById(id);
        if(feedBack.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Ok", "Query Success", feedBack)
            );
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Bad", "Can not found " + id, "")
            );
        }
    }

    // add
    @PostMapping("")
    ResponseEntity<ResponseObject> addFeedBack(@RequestBody FeedBack feedBack){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "add new successfully", feedBackRepository.save(feedBack))
        );
    }

    //delete
    @DeleteMapping("/{id}")
    ResponseEntity<ResponseObject> deleteFeedBack(@PathVariable int id) {
        boolean exists = feedBackRepository.existsById(id);
        if (exists) {
            feedBackRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("OK", "Delete feedBack successfully", "")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Bad", "Cannot find feedBack to delete", "")
        );
    }
}
