package com.nisum.sprint3project.service;

import com.nisum.sprint3project.dto.ShipmentDTO;
import com.nisum.sprint3project.dto.ShipmentItemDTO;
import com.nisum.sprint3project.entity.ShipmentEntity;
import com.nisum.sprint3project.entity.ShipmentItemEntity;
import com.nisum.sprint3project.entity.Product;
import com.nisum.sprint3project.repository.ShipmentRepository;
import com.nisum.sprint3project.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ShipmentService {
    
    @Autowired
    private ShipmentRepository shipmentRepository;
    
    @Autowired
    private ProductRepository productRepository;
    
    public Optional<ShipmentDTO> getShipmentByOrderId(Integer orderId) {
        Optional<ShipmentEntity> shipment = shipmentRepository.findByOrderIdWithItems(orderId);
        return shipment.map(this::convertToDTO);
    }
    
    public Optional<ShipmentDTO> trackShipment(String trackingId) {
        Optional<ShipmentEntity> shipment = shipmentRepository.findByShipmentTrackingId(trackingId);
        return shipment.map(this::convertToDTO);
    }
    
    private ShipmentDTO convertToDTO(ShipmentEntity shipment) {
        ShipmentDTO dto = new ShipmentDTO();
        dto.setShipmentId(shipment.getShipmentId().toString());
        dto.setStatus(shipment.getShipmentStatus());
        dto.setTrackingId(shipment.getShipmentTrackingId());
        dto.setShippedDate(shipment.getShipmentDate());
        dto.setDeliveredDate(shipment.getDeliveredDate());
        
        // Set estimated delivery (you might want to add this field to Shipment entity)
        if (shipment.getDeliveredDate() == null && shipment.getShipmentDate() != null) {
            dto.setEstimatedDelivery(shipment.getShipmentDate().plusDays(3));
        }
        
        if (shipment.getShipmentItems() != null) {
            List<ShipmentItemDTO> itemDTOs = shipment.getShipmentItems().stream()
                .map(this::convertItemToDTO)
                .collect(Collectors.toList());
            dto.setItems(itemDTOs);
        }
        
        return dto;
    }
    
    private ShipmentItemDTO convertItemToDTO(ShipmentItemEntity item) {
        ShipmentItemDTO dto = new ShipmentItemDTO();
        dto.setQuantity(item.getShippedQty());
        
        if (item.getOrderItem() != null) {
            dto.setProductId(item.getOrderItem().getProductId().toString());
            
            // Get product name from Product entity
            Optional<Product> product = productRepository.findById(item.getOrderItem().getProductId());
            if (product.isPresent()) {
                dto.setProductName(product.get().getProductName());
            } else {
                dto.setProductName("Unknown Product");
            }
        }
        
        // Set default image
        dto.setImage("https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200");
        
        return dto;
    }
}