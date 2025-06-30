package com.nisum.sprint3project.controller;

import com.nisum.sprint3project.dto.ShipmentDTO;
import com.nisum.sprint3project.service.ShipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/shipments")
@CrossOrigin(origins = "http://localhost:3000")
public class ShipmentController {
    
    @Autowired
    private ShipmentService shipmentService;
    
    @GetMapping("/order/{orderId}")
    public ResponseEntity<ShipmentDTO> getShipmentDetails(@PathVariable Integer orderId) {
        Optional<ShipmentDTO> shipment = shipmentService.getShipmentByOrderId(orderId);
        return shipment.map(ResponseEntity::ok)
                      .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/track/{trackingId}")
    public ResponseEntity<ShipmentDTO> trackShipment(@PathVariable String trackingId) {
        Optional<ShipmentDTO> shipment = shipmentService.trackShipment(trackingId);
        return shipment.map(ResponseEntity::ok)
                      .orElse(ResponseEntity.notFound().build());
    }
}