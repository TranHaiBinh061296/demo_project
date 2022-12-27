package com.example.demo.repositories;

import com.example.demo.entity.Orders;
import com.example.demo.entity.OrdersDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer> {
}
