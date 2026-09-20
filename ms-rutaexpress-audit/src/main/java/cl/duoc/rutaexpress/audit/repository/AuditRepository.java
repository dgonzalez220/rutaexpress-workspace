package cl.duoc.rutaexpress.audit.repository;

import cl.duoc.rutaexpress.audit.model.AuditLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuditRepository extends JpaRepository<AuditLog, Long> {
}