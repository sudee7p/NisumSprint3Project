package com.nisum.sprint3project.controller;

import com.nisum.sprint3project.dto.OrderDTO;
import com.nisum.sprint3project.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
    
    @Autowired
    private OrderService orderService;
    
    @GetMapping
    public ResponseEntity<List<OrderDTO>> getAllOrders(@RequestParam(defaultValue = "1") Integer userId) {
        List<OrderDTO> orders = orderService.getAllOrdersByUserId(userId);
        return ResponseEntity.ok(orders);
    }
    
    @GetMapping("/{orderId}")
    public ResponseEntity<OrderDTO> getOrderById(@PathVariable Integer orderId) {
        Optional<OrderDTO> order = orderService.getOrderById(orderId);
        return order.map(ResponseEntity::ok)
                   .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/{orderId}/items")
    public ResponseEntity<OrderDTO> getOrderItems(@PathVariable Integer orderId) {
        Optional<OrderDTO> order = orderService.getOrderById(orderId);
        return order.map(ResponseEntity::ok)
                   .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/{orderId}/invoice")
    public ResponseEntity<OrderDTO> getInvoice(@PathVariable Integer orderId) {
        Optional<OrderDTO> order = orderService.getOrderById(orderId);
        return order.map(ResponseEntity::ok)
                   .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping("/{orderId}/reorder")
    public ResponseEntity<String> reorderItems(@PathVariable Integer orderId) {
        Optional<OrderDTO> order = orderService.reorderItems(orderId);
        if (order.isPresent()) {
            return ResponseEntity.ok("Order has been placed successfully!");
        }
        return ResponseEntity.notFound().build();
    }
}