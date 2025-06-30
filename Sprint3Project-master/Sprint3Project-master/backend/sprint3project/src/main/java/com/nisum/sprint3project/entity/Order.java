package com.nisum.sprint3project.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "Orders")
public class Order {
    
    @Id
    @Column(name = "OrderID")
    private Integer orderId;
    
    @Column(name = "UserID")
    private Integer userId;
    
    @Column(name = "OrderDate")
    private LocalDateTime orderDate;
    
    @Column(name = "OrderStatus", length = 50)
    private String orderStatus;
    
    @Column(name = "OrderTotal", precision = 10, scale = 2)
    private BigDecimal orderTotal;
    
    @Column(name = "SellerID")
    private Integer sellerId;
    
    @Column(name = "WarehouseID")
    private Integer warehouseId;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "UserID", insertable = false, updatable = false)
    private User user;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SellerID", insertable = false, updatable = false)
    private Seller seller;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "WarehouseID", insertable = false, updatable = false)
    private Warehouse warehouse;
    
    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<OrderItem> orderItems;
    
    @OneToOne(mappedBy = "order", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private OrderInvoice invoice;
    
    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ShipmentEntity> shipments;
    
    // Constructors
    public Order() {}
    
    // Getters and Setters
    public Integer getOrderId() { return orderId; }
    public void setOrderId(Integer orderId) { this.orderId = orderId; }
    
    public Integer getUserId() { return userId; }
    public void setUserId(Integer userId) { this.userId = userId; }
    
    public LocalDateTime getOrderDate() { return orderDate; }
    public void setOrderDate(LocalDateTime orderDate) { this.orderDate = orderDate; }
    
    public String getOrderStatus() { return orderStatus; }
    public void setOrderStatus(String orderStatus) { this.orderStatus = orderStatus; }
    
    public BigDecimal getOrderTotal() { return orderTotal; }
    public void setOrderTotal(BigDecimal orderTotal) { this.orderTotal = orderTotal; }
    
    public Integer getSellerId() { return sellerId; }
    public void setSellerId(Integer sellerId) { this.sellerId = sellerId; }
    
    public Integer getWarehouseId() { return warehouseId; }
    public void setWarehouseId(Integer warehouseId) { this.warehouseId = warehouseId; }
    
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    
    public Seller getSeller() { return seller; }
    public void setSeller(Seller seller) { this.seller = seller; }
    
    public Warehouse getWarehouse() { return warehouse; }
    public void setWarehouse(Warehouse warehouse) { this.warehouse = warehouse; }
    
    public List<OrderItem> getOrderItems() { return orderItems; }
    public void setOrderItems(List<OrderItem> orderItems) { this.orderItems = orderItems; }
    
    public OrderInvoice getInvoice() { return invoice; }
    public void setInvoice(OrderInvoice invoice) { this.invoice = invoice; }
    
    public List<ShipmentEntity> getShipments() { return shipments; }
    public void setShipments(List<ShipmentEntity> shipments) { this.shipments = shipments; }
}