package cl.duoc.rutaexpress.audit.consumer;

import cl.duoc.rutaexpress.audit.event.ShipmentStatusEvent;
import cl.duoc.rutaexpress.audit.model.AuditLog;
import cl.duoc.rutaexpress.audit.repository.AuditRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class AuditKafkaConsumer {

    private static final Logger log = LoggerFactory.getLogger(AuditKafkaConsumer.class);
    private final AuditRepository auditRepository;

    @KafkaListener(topics = "shipment-status-topic", groupId = "audit-group")
    public void listenShipmentStatus(ShipmentStatusEvent event) {
        log.info("📩 Evento recibido desde Kafka: Envío ID {} cambió de {} a {}", 
                 event.shipmentId(), event.previousStatus(), event.newStatus());
        
        // Mapear y guardar en la base de datos de Oracle
        AuditLog auditLog = new AuditLog(
            null,
            event.shipmentId(),
            event.previousStatus(),
            event.newStatus(),
            event.timestamp() != null ? event.timestamp() : LocalDateTime.now()
        );

        auditRepository.save(auditLog);
        log.info("💾 Registro de auditoría guardado exitosamente en Oracle para el envío ID: {}", event.shipmentId());
    }
}