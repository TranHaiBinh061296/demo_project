package com.example.demo.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Products implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String productName;
    @Column
    private String imageUrl;
    @Column
    private String status;
    @Column
    private String descr;
    @Column
    private Double price;
    @Column
    private Integer stock;
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date createAt;
    @PrePersist
    private void onCreateDate(){
        createAt = new Date();
    }

    public Products(String productName, String descr,Double price, int stock, String imageUrl, String status,  Categories categories, List<OrdersDetail> detailSet) {
        this.productName = productName;
        this.descr = descr;
        this.price = price;
        this.stock = stock;
        this.imageUrl = imageUrl;
        this.status = status;
        this.categories = categories;
        this.detailList = detailSet;
    }

    @JsonBackReference
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "cate_id", referencedColumnName = "id")
    private Categories categories;

    @OneToMany(mappedBy = "products")
    private List<OrdersDetail> detailList;
}
