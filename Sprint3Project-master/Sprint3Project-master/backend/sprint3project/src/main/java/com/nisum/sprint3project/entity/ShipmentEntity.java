package com.nisum.sprint3project.entity;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "Shipments")
public class ShipmentEntity {
    
    @Id
    @Column(name = "ShipmentID")
    private Integer shipmentId;
    
    @Column(name = "OrderID")
    private Integer orderId;
    
    @Column(name = "ShipmentStatus", length = 50)
    private String shipmentStatus;
    
    @Column(name = "ShipmentTrackingID", length = 100)
    private String shipmentTrackingId;
    
    @Column(name = "ShipmentDate")
    private LocalDateTime shipmentDate;
    
    @Column(name = "DeliveredDate")
    private LocalDateTime deliveredDate;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OrderID", insertable = false, updatable = false)
    private Order order;
    
    @OneToMany(mappedBy = "shipment", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ShipmentItemEntity> shipmentItems;
    
    // Constructors
    public ShipmentEntity() {}
    
    // Getters and Setters
    public Integer getShipmentId() { return shipmentId; }
    public void setShipmentId(Integer shipmentId) { this.shipmentId = shipmentId; }
    
    public Integer getOrderId() { return orderId; }
    public void setOrderId(Integer orderId) { this.orderId = orderId; }
    
    public String getShipmentStatus() { return shipmentStatus; }
    public void setShipmentStatus(String shipmentStatus) { this.shipmentStatus = shipmentStatus; }
    
    public String getShipmentTrackingId() { return shipmentTrackingId; }
    public void setShipmentTrackingId(String shipmentTrackingId) { this.shipmentTrackingId = shipmentTrackingId; }
    
    public LocalDateTime getShipmentDate() { return shipmentDate; }
    public void setShipmentDate(LocalDateTime shipmentDate) { this.shipmentDate = shipmentDate; }
    
    public LocalDateTime getDeliveredDate() { return deliveredDate; }
    public void setDeliveredDate(LocalDateTime deliveredDate) { this.deliveredDate = deliveredDate; }
    
    public Order getOrder() { return order; }
    public void setOrder(Order order) { this.order = order; }
    
    public List<ShipmentItemEntity> getShipmentItems() { return shipmentItems; }
    public void setShipmentItems(List<ShipmentItemEntity> shipmentItems) { this.shipmentItems = shipmentItems; }
}