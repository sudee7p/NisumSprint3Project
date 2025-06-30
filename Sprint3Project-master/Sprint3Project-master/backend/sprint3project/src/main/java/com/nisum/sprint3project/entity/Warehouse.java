package com.nisum.sprint3project.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Warehouse")
public class Warehouse {
    
    @Id
    @Column(name = "WarehouseID")
    private Integer warehouseId;
    
    @Column(name = "WarehouseName", length = 100)
    private String warehouseName;
    
    @Column(name = "Location")
    private String location;
    
    @Column(name = "ManagerName", length = 100)
    private String managerName;
    
    @Column(name = "PhoneNumber", length = 20)
    private String phoneNumber;
    
    @Column(name = "Email", length = 100)
    private String email;
    
    @Column(name = "Capacity")
    private Integer capacity;
    
    @Column(name = "CreatedDate")
    private LocalDateTime createdDate;
    
    // Constructors
    public Warehouse() {}
    
    // Getters and Setters
    public Integer getWarehouseId() { return warehouseId; }
    public void setWarehouseId(Integer warehouseId) { this.warehouseId = warehouseId; }
    
    public String getWarehouseName() { return warehouseName; }
    public void setWarehouseName(String warehouseName) { this.warehouseName = warehouseName; }
    
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    
    public String getManagerName() { return managerName; }
    public void setManagerName(String managerName) { this.managerName = managerName; }
    
    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public Integer getCapacity() { return capacity; }
    public void setCapacity(Integer capacity) { this.capacity = capacity; }
    
    public LocalDateTime getCreatedDate() { return createdDate; }
    public void setCreatedDate(LocalDateTime createdDate) { this.createdDate = createdDate; }
}