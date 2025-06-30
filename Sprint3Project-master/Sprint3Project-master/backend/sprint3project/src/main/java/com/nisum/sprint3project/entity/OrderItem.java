package com.nisum.sprint3project.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "OrderItems")
public class OrderItem {
    
    @Id
    @Column(name = "OrderItemID")
    private Integer orderItemId;
    
    @Column(name = "OrderID")
    private Integer orderId;
    
    @Column(name = "ProductID")
    private Integer productId;
    
    @Column(name = "SKU", length = 50)
    private String sku;
    
    @Column(name = "Quantity")
    private Integer quantity;
    
    @Column(name = "UnitPrice", precision = 10, scale = 2)
    private BigDecimal unitPrice;
    
    @Column(name = "Discount", precision = 10, scale = 2)
    private BigDecimal discount;
    
    @Column(name = "FinalPrice", precision = 10, scale = 2)
    private BigDecimal finalPrice;
    
    @Column(name = "Size", length = 20)
    private String size;
    
    @Column(name = "Color", length = 30)
    private String color;
    
    @Column(name = "Status", length = 50)
    private String status;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OrderID", insertable = false, updatable = false)
    private Order order;
    
    // Constructors
    public OrderItem() {}
    
    // Getters and Setters
    public Integer getOrderItemId() { return orderItemId; }
    public void setOrderItemId(Integer orderItemId) { this.orderItemId = orderItemId; }
    
    public Integer getOrderId() { return orderId; }
    public void setOrderId(Integer orderId) { this.orderId = orderId; }
    
    public Integer getProductId() { return productId; }
    public void setProductId(Integer productId) { this.productId = productId; }
    
    public String getSku() { return sku; }
    public void setSku(String sku) { this.sku = sku; }
    
    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
    
    public BigDecimal getUnitPrice() { return unitPrice; }
    public void setUnitPrice(BigDecimal unitPrice) { this.unitPrice = unitPrice; }
    
    public BigDecimal getDiscount() { return discount; }
    public void setDiscount(BigDecimal discount) { this.discount = discount; }
    
    public BigDecimal getFinalPrice() { return finalPrice; }
    public void setFinalPrice(BigDecimal finalPrice) { this.finalPrice = finalPrice; }
    
    public String getSize() { return size; }
    public void setSize(String size) { this.size = size; }
    
    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    public Order getOrder() { return order; }
    public void setOrder(Order order) { this.order = order; }
}