package com.nisum.sprint3project.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Seller")
public class Seller {
    
    @Id
    @Column(name = "SellerID")
    private Integer sellerId;
    
    @Column(name = "SellerName", length = 100)
    private String sellerName;
    
    @Column(name = "ContactName", length = 100)
    private String contactName;
    
    @Column(name = "Email", length = 100)
    private String email;
    
    @Column(name = "PhoneNumber", length = 20)
    private String phoneNumber;
    
    @Column(name = "AddressLine1")
    private String addressLine1;
    
    @Column(name = "AddressLine2")
    private String addressLine2;
    
    @Column(name = "City", length = 100)
    private String city;
    
    @Column(name = "State", length = 100)
    private String state;
    
    @Column(name = "ZipCode", length = 20)
    private String zipCode;
    
    @Column(name = "Country", length = 100)
    private String country;
    
    @Column(name = "CreatedDate")
    private LocalDateTime createdDate;
    
    // Constructors
    public Seller() {}
    
    // Getters and Setters
    public Integer getSellerId() { return sellerId; }
    public void setSellerId(Integer sellerId) { this.sellerId = sellerId; }
    
    public String getSellerName() { return sellerName; }
    public void setSellerName(String sellerName) { this.sellerName = sellerName; }
    
    public String getContactName() { return contactName; }
    public void setContactName(String contactName) { this.contactName = contactName; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
    
    public String getAddressLine1() { return addressLine1; }
    public void setAddressLine1(String addressLine1) { this.addressLine1 = addressLine1; }
    
    public String getAddressLine2() { return addressLine2; }
    public void setAddressLine2(String addressLine2) { this.addressLine2 = addressLine2; }
    
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    
    public String getState() { return state; }
    public void setState(String state) { this.state = state; }
    
    public String getZipCode() { return zipCode; }
    public void setZipCode(String zipCode) { this.zipCode = zipCode; }
    
    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }
    
    public LocalDateTime getCreatedDate() { return createdDate; }
    public void setCreatedDate(LocalDateTime createdDate) { this.createdDate = createdDate; }
}