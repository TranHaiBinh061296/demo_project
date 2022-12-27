package com.example.demo.controller;


import com.example.demo.entity.Products;
import com.example.demo.response.ResponseObject;
import com.example.demo.services.IStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping(path = "/api/v1/image")
@CrossOrigin("*")
public class FileUpLoadController {
    @Autowired
    private IStorageService storageService;

    @PostMapping("")
    public ResponseEntity<ResponseObject> uploadFile(@RequestParam("file")MultipartFile file){
        try {

            //save files to a folder => use a service
            String generatedFileName = storageService.storeFile(file);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok", "upload file successfully","http://localhost:8080/api/v1/image/files/"+ generatedFileName)
            );
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject( "bad", e.getMessage(), "")
            );
        }
    }

    //get image url
    @GetMapping("/files/{fileName:.+}")
    public ResponseEntity<byte[]> readDetailFile(@PathVariable String fileName){
        try {
            byte[] bytes = storageService.readFileContent(fileName);
            return ResponseEntity
                    .ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(bytes);
        }catch (Exception exception){
            return  ResponseEntity.noContent().build();
        }
    }

    @GetMapping("")
    public ResponseEntity<ResponseObject> getUploadFiles(){
        try {
            List<String> urls =storageService.loadAll()
                    .map(path -> {
                        String urlPath = MvcUriComponentsBuilder.fromMethodName(FileUpLoadController.class,
                                "readDetailFile", path.getFileName().toString()).build().toUri().toString();
                        return urlPath;
                    })
                    .collect(Collectors.toList());
            return ResponseEntity.ok(new ResponseObject("ok", "List file successfully", urls));
        }catch (Exception exception){
            return ResponseEntity.ok(new ResponseObject("ok", "List file files", new String[]{}));
        }
    }
}
