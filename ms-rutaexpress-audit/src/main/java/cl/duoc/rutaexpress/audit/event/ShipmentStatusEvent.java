package cl.duoc.rutaexpress.audit.event;

import java.time.LocalDateTime;

public record ShipmentStatusEvent(
    Long shipmentId,
    String previousStatus,
    String newStatus,
    LocalDateTime timestamp
) {}