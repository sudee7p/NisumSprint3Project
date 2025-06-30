package com.nisum.sprint3project.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class InvoiceDTO {
    private String invoiceNo;
    private LocalDateTime date;
    private String paymentMode;
    private BigDecimal totalAmount;
    
    // Constructors
    public InvoiceDTO() {}
    
    public InvoiceDTO(String invoiceNo, LocalDateTime date, String paymentMode, BigDecimal totalAmount) {
        this.invoiceNo = invoiceNo;
        this.date = date;
        this.paymentMode = paymentMode;
        this.totalAmount = totalAmount;
    }
    
    // Getters and Setters
    public String getInvoiceNo() { return invoiceNo; }
    public void setInvoiceNo(String invoiceNo) { this.invoiceNo = invoiceNo; }
    
    public LocalDateTime getDate() { return date; }
    public void setDate(LocalDateTime date) { this.date = date; }
    
    public String getPaymentMode() { return paymentMode; }
    public void setPaymentMode(String paymentMode) { this.paymentMode = paymentMode; }
    
    public BigDecimal getTotalAmount() { return totalAmount; }
    public void setTotalAmount(BigDecimal totalAmount) { this.totalAmount = totalAmount; }
}