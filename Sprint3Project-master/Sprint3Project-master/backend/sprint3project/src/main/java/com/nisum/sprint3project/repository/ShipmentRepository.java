package com.nisum.sprint3project.repository;

import com.nisum.sprint3project.entity.ShipmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ShipmentRepository extends JpaRepository<ShipmentEntity, Integer> {
    
    Optional<ShipmentEntity> findByOrderId(Integer orderId);
    
    Optional<ShipmentEntity> findByShipmentTrackingId(String trackingId);
    
    @Query("SELECT s FROM ShipmentEntity s LEFT JOIN FETCH s.shipmentItems si LEFT JOIN FETCH si.orderItem WHERE s.orderId = :orderId")
    Optional<ShipmentEntity> findByOrderIdWithItems(@Param("orderId") Integer orderId);
}