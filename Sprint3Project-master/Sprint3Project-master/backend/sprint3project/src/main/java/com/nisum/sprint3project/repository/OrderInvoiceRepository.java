package com.nisum.sprint3project.repository;

import com.nisum.sprint3project.entity.OrderInvoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderInvoiceRepository extends JpaRepository<OrderInvoice, Integer> {
    
    Optional<OrderInvoice> findByOrderId(Integer orderId);
    
    @Query("SELECT oi FROM OrderInvoice oi LEFT JOIN FETCH oi.invoiceItems WHERE oi.orderId = :orderId")
    Optional<OrderInvoice> findByOrderIdWithItems(@Param("orderId") Integer orderId);
}