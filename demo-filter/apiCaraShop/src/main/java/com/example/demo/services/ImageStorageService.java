package com.example.demo.services;

import org.apache.commons.io.FilenameUtils;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Arrays;
import java.util.Locale;
import java.util.UUID;
import java.util.stream.Stream;


@Service
public class ImageStorageService implements IStorageService{
    private final Path storageFolder = Paths.get("uploads");

    //constructor
    public ImageStorageService(){
        try {
            Files.createDirectories(storageFolder);
        }catch (IOException exception){
            throw new RuntimeException("cannot initialize storage", exception);
        }
    }

    private boolean isImageFile(MultipartFile file){
        //let install fileNameUtils
        String fileExtension = FilenameUtils.getExtension(file.getOriginalFilename());
        return Arrays.asList(new String[] {"png","jpg", "jpeg", "bmg"})
                .contains(fileExtension.trim().toLowerCase());
    }

    @Override
    public String storeFile(MultipartFile file) {
        try {
            System.out.println("ahhaha");
            if(file.isEmpty()){
                throw new RuntimeException("failed to store empty file");
            }

            if(!isImageFile(file)){
                throw new RuntimeException("you can only upload image file");
            }
             // file must be <= 5mb
            float fileSizeInMegaBytes = file.getSize() / 1000000.0f;
            if(fileSizeInMegaBytes > 5.0f){
                throw new RuntimeException("File must be <= 5mb");
            }

            // rename file
            String fileExtension = FilenameUtils.getExtension(file.getOriginalFilename());
            String generatedFileName = UUID.randomUUID().toString().replace("-","");
            generatedFileName = generatedFileName+"."+fileExtension;
            Path destinationFilePath = this.storageFolder.resolve(
                    Paths.get(generatedFileName)).normalize().toAbsolutePath();

            if(!destinationFilePath.getParent().equals(this.storageFolder.toAbsolutePath())){
                // this is a security check
                throw new RuntimeException("Cannot store file outside directory");
            }

            try (InputStream inputStream = file.getInputStream()){
                Files.copy(inputStream, destinationFilePath, StandardCopyOption.REPLACE_EXISTING);
            }
            return generatedFileName;
        }catch (IOException exception){
            throw new RuntimeException("cannot initialize storage", exception);
        }
    }

    @Override
    public Stream<Path> loadAll() {
        try {
            // list all files in storageFolder
            return Files.walk(this.storageFolder, 1)
                    .filter(path -> !path.equals(this.storageFolder))
                    .map(this.storageFolder::relativize);
        }catch (IOException e){
            throw new RuntimeException("cannot initialize storage", e);
        }
    }

    @Override
    public byte[] readFileContent(String fileName) {
        try {
            Path file = storageFolder.resolve(fileName);
            Resource resource = new UrlResource(file.toUri());
            if(resource.exists() || resource.isReadable()){
                byte[] bytes = StreamUtils.copyToByteArray(resource.getInputStream());
                return  bytes;
            }
            else {
                throw new RuntimeException("Could not read file: " + fileName);
            }
        } catch (IOException e) {
            throw new RuntimeException("Could not read file: " + fileName);
        }
    }

    @Override
    public void deleteAllFile() {

    }
}
