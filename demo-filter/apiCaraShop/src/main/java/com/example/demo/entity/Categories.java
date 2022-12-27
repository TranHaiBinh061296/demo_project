package com.example.demo.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Categories implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String name;
    @Column
    private String description;
    @Temporal(TemporalType.TIMESTAMP)
    @Column
    private Date createAt;
    @PrePersist
    private void onCreateDate(){
        createAt = new Date();
    }

    @OneToMany(mappedBy = "categories", cascade = CascadeType.ALL)
    private List<Products> productsList;

    public Categories(String name, List<Products> productsList) {
        this.name = name;
        this.productsList = productsList;
    }
}
