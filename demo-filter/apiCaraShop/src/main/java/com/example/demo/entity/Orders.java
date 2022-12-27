package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Orders implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private Boolean status;
    @Column
    private Date createdAt;
    @PrePersist
    private void onCreateDate(){
        createdAt = new Date();
    }

    public Orders( Users users,Boolean status, List<OrdersDetail> ordersDetail) {
        this.users = users;
        this.status = status;
        this.ordersDetailList = ordersDetail;
    }

    @JsonBackReference
    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private Users users;

    @OneToMany(mappedBy = "orders", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrdersDetail> ordersDetailList;
}
