package com.nisum.sprint3project.service;

import com.nisum.sprint3project.dto.OrderDTO;
import com.nisum.sprint3project.dto.OrderItemDTO;
import com.nisum.sprint3project.dto.InvoiceDTO;
import com.nisum.sprint3project.entity.Order;
import com.nisum.sprint3project.entity.OrderItem;
import com.nisum.sprint3project.entity.OrderInvoice;
import com.nisum.sprint3project.entity.Product;
import com.nisum.sprint3project.repository.OrderRepository;
import com.nisum.sprint3project.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderService {
    
    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
    private ProductRepository productRepository;
    
    public List<OrderDTO> getAllOrdersByUserId(Integer userId) {
        List<Order> orders = orderRepository.findByUserIdOrderByOrderDateDesc(userId);
        return orders.stream().map(this::convertToDTO).collect(Collectors.toList());
    }
    
    public Optional<OrderDTO> getOrderById(Integer orderId) {
        Optional<Order> order = orderRepository.findByIdWithDetails(orderId);
        return order.map(this::convertToDetailedDTO);
    }
    
    public Optional<OrderDTO> reorderItems(Integer orderId) {
        // Simulate reorder logic
        Optional<Order> order = orderRepository.findByIdWithItems(orderId);
        if (order.isPresent()) {
            // In real implementation, create new order with same items
            return Optional.of(convertToDTO(order.get()));
        }
        return Optional.empty();
    }
    
    private OrderDTO convertToDTO(Order order) {
        OrderDTO dto = new OrderDTO();
        dto.setOrderId(order.getOrderId());
        dto.setOrderDate(order.getOrderDate());
        dto.setTotalAmount(order.getOrderTotal());
        dto.setStatus(order.getOrderStatus());
        
        if (order.getOrderItems() != null) {
            List<OrderItemDTO> itemDTOs = order.getOrderItems().stream()
                .map(this::convertItemToDTO)
                .collect(Collectors.toList());
            dto.setItems(itemDTOs);
        }
        
        return dto;
    }
    
    private OrderDTO convertToDetailedDTO(Order order) {
        OrderDTO dto = convertToDTO(order);
        
        // Add warehouse information
        if (order.getWarehouse() != null) {
            dto.setShippingAddress(order.getWarehouse().getLocation());
        }
        
        if (order.getInvoice() != null) {
            dto.setInvoice(convertInvoiceToDTO(order.getInvoice()));
        }
        
        return dto;
    }
    
    private OrderItemDTO convertItemToDTO(OrderItem item) {
        OrderItemDTO dto = new OrderItemDTO();
        dto.setProductId(item.getProductId().toString());
        dto.setQuantity(item.getQuantity());
        dto.setPrice(item.getFinalPrice());
        dto.setSize(item.getSize());
        dto.setColor(item.getColor());
        
        // Get product name from Product entity
        Optional<Product> product = productRepository.findById(item.getProductId());
        if (product.isPresent()) {
            dto.setProductName(product.get().getProductName());
        } else {
            dto.setProductName("Unknown Product");
        }
        
        // Set default image based on product type
        if (item.getProductId() == 301) {
            dto.setImage("https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300");
        } else if (item.getProductId() == 302) {
            dto.setImage("https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300");
        } else {
            dto.setImage("https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=300");
        }
        
        return dto;
    }
    
    private InvoiceDTO convertInvoiceToDTO(OrderInvoice invoice) {
        return new InvoiceDTO(
            invoice.getInvoiceNumber(),
            invoice.getInvoiceDate(),
            invoice.getPaymentMode(),
            invoice.getInvoiceAmount()
        );
    }
}