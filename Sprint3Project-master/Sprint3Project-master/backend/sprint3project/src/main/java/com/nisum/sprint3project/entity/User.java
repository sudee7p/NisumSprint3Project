package com.nisum.sprint3project.entity;

import javax.persistence.*;

@Entity
@Table(name = "Users")
public class User {
    
    @Id
    @Column(name = "UserID")
    private Integer userId;
    
    @Column(name = "FirstName", length = 50)
    private String firstName;
    
    @Column(name = "LastName", length = 50)
    private String lastName;
    
    @Column(name = "Password")
    private String password;
    
    @Column(name = "Email", unique = true, length = 100)
    private String email;
    
    @Column(name = "PhoneNumber", length = 15)
    private String phoneNumber;
    
    // Constructors
    public User() {}
    
    public User(Integer userId, String firstName, String lastName, String email, String phoneNumber) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    
    // Getters and Setters
    public Integer getUserId() { return userId; }
    public void setUserId(Integer userId) { this.userId = userId; }
    
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
}