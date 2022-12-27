package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class OrdersDetail implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private Double price;
    @Column
    private Integer quantity;
    @Column
    private String descr;

    public OrdersDetail(double price, int quantity, String descr, Orders orders, Products products) {
        this.price = price;
        this.quantity = quantity;
        this.descr = descr;
        this.orders = orders;
        this.products = products;
    }

    @JsonBackReference
    @ManyToOne(optional = false)
    @JoinColumn(name = "orders_id", referencedColumnName = "id")
    private Orders orders;

    @JsonIgnore
    @ManyToOne(optional = false)
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Products products;

}
