package com.example.demo.repositories;

import com.example.demo.entity.OrdersDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OrdersDetailRepository extends JpaRepository<OrdersDetail, Integer> {
    @Query(value = "SELECT * FROM clothes1.orders_detail where orders_id = :id ", nativeQuery = true)
    OrdersDetail findByOrdersId (@Param("id") int id);
}
