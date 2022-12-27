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
public class Users implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String email;
    @Column
    private String phoneNumber;
    @Column
    private String pw;
    @Column
    private Boolean isAdmin = true;
    @Column
    private Boolean isLogin = false;
    @Temporal(TemporalType.TIMESTAMP)
    @Column
    private Date createAt;
    @PrePersist
    private void onCreateDate(){
        createAt = new Date();
    }

    public Users(String firstName, String lastName, String email, String phoneNumber, String pw, boolean isAdmin, boolean isLogin, List<Orders> ordersSet, List<FeedBack> feedBackList) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.pw = pw;
        this.isAdmin = isAdmin;
        this.isLogin = isLogin;
        this.ordersSet = ordersSet;
        this.feedBackList = feedBackList;
    }

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL)
    private List<Orders> ordersSet;

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL)
    private List<FeedBack> feedBackList;
}
