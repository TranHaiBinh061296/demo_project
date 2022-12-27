package com.example.demo.repositories;

import com.example.demo.entity.Orders;
import com.example.demo.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
    List<Users> findByEmail(String email);
    @Query(value = "SELECT od.price\n" +
                    "FROM clothes1.users AS u , clothes1.orders AS o , clothes1.orders_detail AS od\n" +
                    "where  u.id = o.user_id and o.id = od.orders_id\n" +
                    "and o.id = :id", nativeQuery = true)
    Orders finByOrdersSetById(int id);

    //findBy user
    @Query(value =
            "select * from clothes.users AS u where u.email = :email " +
                    "and " +
                    "u.pw = :password",
            nativeQuery = true)
    Users findByUser(@Param("email") String email, @Param("password") String password);

}
