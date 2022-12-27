package com.example.demo.repositories;

import com.example.demo.entity.Categories;
import com.example.demo.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CategoriesRepository extends JpaRepository<Categories,  Integer> {
//    List<Categories> findByCategoriesName(String cateName);

}
