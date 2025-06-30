package com.nisum.sprint3project.dto;

import java.math.BigDecimal;

public class OrderItemDTO {
    private String productId;
    private String productName;
    private Integer quantity;
    private BigDecimal price;
    private String image;
    private String size;
    private String color;
    
    // Constructors
    public OrderItemDTO() {}
    
    public OrderItemDTO(String productId, String productName, Integer quantity, BigDecimal price, String image) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
        this.image = image;
    }
    
    // Getters and Setters
    public String getProductId() { return productId; }
    public void setProductId(String productId) { this.productId = productId; }
    
    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }
    
    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
    
    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
    
    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
    
    public String getSize() { return size; }
    public void setSize(String size) { this.size = size; }
    
    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }
}