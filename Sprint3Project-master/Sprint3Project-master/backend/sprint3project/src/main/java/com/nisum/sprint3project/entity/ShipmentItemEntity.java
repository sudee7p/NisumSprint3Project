package com.nisum.sprint3project.entity;

import javax.persistence.*;

@Entity
@Table(name = "ShipmentItems")
public class ShipmentItemEntity {
    
    @Id
    @Column(name = "ShipmentItemID")
    private Integer shipmentItemId;
    
    @Column(name = "ShipmentID")
    private Integer shipmentId;
    
    @Column(name = "OrderItemID")
    private Integer orderItemId;
    
    @Column(name = "ShippedQty")
    private Integer shippedQty;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ShipmentID", insertable = false, updatable = false)
    private ShipmentEntity shipment;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OrderItemID", insertable = false, updatable = false)
    private OrderItem orderItem;
    
    // Constructors
    public ShipmentItemEntity() {}
    
    // Getters and Setters
    public Integer getShipmentItemId() { return shipmentItemId; }
    public void setShipmentItemId(Integer shipmentItemId) { this.shipmentItemId = shipmentItemId; }
    
    public Integer getShipmentId() { return shipmentId; }
    public void setShipmentId(Integer shipmentId) { this.shipmentId = shipmentId; }
    
    public Integer getOrderItemId() { return orderItemId; }
    public void setOrderItemId(Integer orderItemId) { this.orderItemId = orderItemId; }
    
    public Integer getShippedQty() { return shippedQty; }
    public void setShippedQty(Integer shippedQty) { this.shippedQty = shippedQty; }
    
    public ShipmentEntity getShipment() { return shipment; }
    public void setShipment(ShipmentEntity shipment) { this.shipment = shipment; }
    
    public OrderItem getOrderItem() { return orderItem; }
    public void setOrderItem(OrderItem orderItem) { this.orderItem = orderItem; }
}