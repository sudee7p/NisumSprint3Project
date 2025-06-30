package com.nisum.sprint3project.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "OrderInvoice")
public class OrderInvoice {
    
    @Id
    @Column(name = "InvoiceID")
    private Integer invoiceId;
    
    @Column(name = "OrderID")
    private Integer orderId;
    
    @Column(name = "InvoiceNumber", length = 100)
    private String invoiceNumber;
    
    @Column(name = "InvoiceDate")
    private LocalDateTime invoiceDate;
    
    @Column(name = "PaymentMode", length = 50)
    private String paymentMode;
    
    @Column(name = "InvoiceAmount", precision = 10, scale = 2)
    private BigDecimal invoiceAmount;
    
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OrderID", insertable = false, updatable = false)
    private Order order;
    
    @OneToMany(mappedBy = "invoice", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<InvoiceItemEntity> invoiceItems;
    
    // Constructors
    public OrderInvoice() {}
    
    // Getters and Setters
    public Integer getInvoiceId() { return invoiceId; }
    public void setInvoiceId(Integer invoiceId) { this.invoiceId = invoiceId; }
    
    public Integer getOrderId() { return orderId; }
    public void setOrderId(Integer orderId) { this.orderId = orderId; }
    
    public String getInvoiceNumber() { return invoiceNumber; }
    public void setInvoiceNumber(String invoiceNumber) { this.invoiceNumber = invoiceNumber; }
    
    public LocalDateTime getInvoiceDate() { return invoiceDate; }
    public void setInvoiceDate(LocalDateTime invoiceDate) { this.invoiceDate = invoiceDate; }
    
    public String getPaymentMode() { return paymentMode; }
    public void setPaymentMode(String paymentMode) { this.paymentMode = paymentMode; }
    
    public BigDecimal getInvoiceAmount() { return invoiceAmount; }
    public void setInvoiceAmount(BigDecimal invoiceAmount) { this.invoiceAmount = invoiceAmount; }
    
    public Order getOrder() { return order; }
    public void setOrder(Order order) { this.order = order; }
    
    public List<InvoiceItemEntity> getInvoiceItems() { return invoiceItems; }
    public void setInvoiceItems(List<InvoiceItemEntity> invoiceItems) { this.invoiceItems = invoiceItems; }
}