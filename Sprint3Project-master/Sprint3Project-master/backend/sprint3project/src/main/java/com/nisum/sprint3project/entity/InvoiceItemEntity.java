package com.nisum.sprint3project.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "InvoiceItems")
public class InvoiceItemEntity {
    
    @Id
    @Column(name = "InvoiceItemID")
    private Integer invoiceItemId;
    
    @Column(name = "InvoiceID")
    private Integer invoiceId;
    
    @Column(name = "OrderItemID")
    private Integer orderItemId;
    
    @Column(name = "Quantity")
    private Integer quantity;
    
    @Column(name = "UnitPrice", precision = 10, scale = 2)
    private BigDecimal unitPrice;
    
    @Column(name = "Discount", precision = 10, scale = 2)
    private BigDecimal discount;
    
    @Column(name = "FinalPrice", precision = 10, scale = 2)
    private BigDecimal finalPrice;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "InvoiceID", insertable = false, updatable = false)
    private OrderInvoice invoice;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OrderItemID", insertable = false, updatable = false)
    private OrderItem orderItem;
    
    // Constructors
    public InvoiceItemEntity() {}
    
    // Getters and Setters
    public Integer getInvoiceItemId() { return invoiceItemId; }
    public void setInvoiceItemId(Integer invoiceItemId) { this.invoiceItemId = invoiceItemId; }
    
    public Integer getInvoiceId() { return invoiceId; }
    public void setInvoiceId(Integer invoiceId) { this.invoiceId = invoiceId; }
    
    public Integer getOrderItemId() { return orderItemId; }
    public void setOrderItemId(Integer orderItemId) { this.orderItemId = orderItemId; }
    
    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
    
    public BigDecimal getUnitPrice() { return unitPrice; }
    public void setUnitPrice(BigDecimal unitPrice) { this.unitPrice = unitPrice; }
    
    public BigDecimal getDiscount() { return discount; }
    public void setDiscount(BigDecimal discount) { this.discount = discount; }
    
    public BigDecimal getFinalPrice() { return finalPrice; }
    public void setFinalPrice(BigDecimal finalPrice) { this.finalPrice = finalPrice; }
    
    public OrderInvoice getInvoice() { return invoice; }
    public void setInvoice(OrderInvoice invoice) { this.invoice = invoice; }
    
    public OrderItem getOrderItem() { return orderItem; }
    public void setOrderItem(OrderItem orderItem) { this.orderItem = orderItem; }
}