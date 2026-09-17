package cl.duoc.rutaexpress.bff.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/bff/shipments")
public class ShipmentBffController {

    @GetMapping
    public ResponseEntity<?> getShipments(Principal principal) {
        // Simulación de datos que luego vendrán del microservicio shipments
        return ResponseEntity.ok(List.of(
            "Envío RE00123 - Destinatario: Juan Pérez (Autenticado como: " + principal.getName() + ")",
            "Envío RE00124 - Destinatario: Maria Soto"
        ));
    }
}