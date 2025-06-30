package com.nisum.sprint3project.dto;

import java.time.LocalDateTime;
import java.util.List;

public class ShipmentDTO {
    private String shipmentId;
    private String status;
    private String trackingId;
    private LocalDateTime shippedDate;
    private LocalDateTime deliveredDate;
    private LocalDateTime estimatedDelivery;
    private List<ShipmentItemDTO> items;
    
    // Constructors
    public ShipmentDTO() {}
    
    public ShipmentDTO(String shipmentId, String status, String trackingId, LocalDateTime shippedDate) {
        this.shipmentId = shipmentId;
        this.status = status;
        this.trackingId = trackingId;
        this.shippedDate = shippedDate;
    }
    
    // Getters and Setters
    public String getShipmentId() { return shipmentId; }
    public void setShipmentId(String shipmentId) { this.shipmentId = shipmentId; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    public String getTrackingId() { return trackingId; }
    public void setTrackingId(String trackingId) { this.trackingId = trackingId; }
    
    public LocalDateTime getShippedDate() { return shippedDate; }
    public void setShippedDate(LocalDateTime shippedDate) { this.shippedDate = shippedDate; }
    
    public LocalDateTime getDeliveredDate() { return deliveredDate; }
    public void setDeliveredDate(LocalDateTime deliveredDate) { this.deliveredDate = deliveredDate; }
    
    public LocalDateTime getEstimatedDelivery() { return estimatedDelivery; }
    public void setEstimatedDelivery(LocalDateTime estimatedDelivery) { this.estimatedDelivery = estimatedDelivery; }
    
    public List<ShipmentItemDTO> getItems() { return items; }
    public void setItems(List<ShipmentItemDTO> items) { this.items = items; }
}