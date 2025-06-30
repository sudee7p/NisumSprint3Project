package com.nisum.sprint3project.dto;

public class ShipmentItemDTO {
    private String productId;
    private String productName;
    private Integer quantity;
    private String image;
    
    // Constructors
    public ShipmentItemDTO() {}
    
    public ShipmentItemDTO(String productId, String productName, Integer quantity, String image) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.image = image;
    }
    
    // Getters and Setters
    public String getProductId() { return productId; }
    public void setProductId(String productId) { this.productId = productId; }
    
    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }
    
    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
    
    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
}