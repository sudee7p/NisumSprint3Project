package com.nisum.sprint3project.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Product")
public class Product {
    
    @Id
    @Column(name = "ProductID")
    private Integer productId;
    
    @Column(name = "ProductName", length = 100)
    private String productName;
    
    @Column(name = "CategoryID")
    private Integer categoryId;
    
    @Column(name = "Status", length = 20)
    private String status;
    
    @Column(name = "CreatedDate")
    private LocalDateTime createdDate;
    
    @Column(name = "LastModifiedDate")
    private LocalDateTime lastModifiedDate;
    
    // Constructors
    public Product() {}
    
    // Getters and Setters
    public Integer getProductId() { return productId; }
    public void setProductId(Integer productId) { this.productId = productId; }
    
    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }
    
    public Integer getCategoryId() { return categoryId; }
    public void setCategoryId(Integer categoryId) { this.categoryId = categoryId; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    public LocalDateTime getCreatedDate() { return createdDate; }
    public void setCreatedDate(LocalDateTime createdDate) { this.createdDate = createdDate; }
    
    public LocalDateTime getLastModifiedDate() { return lastModifiedDate; }
    public void setLastModifiedDate(LocalDateTime lastModifiedDate) { this.lastModifiedDate = lastModifiedDate; }
}