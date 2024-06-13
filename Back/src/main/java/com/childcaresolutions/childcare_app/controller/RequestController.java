
package com.childcaresolutions.childcare_app.controller;

import com.childcaresolutions.childcare_app.model.dto.request.requestDto.RequestDTO;
import com.childcaresolutions.childcare_app.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/apiRequest")
public class RequestController {
    @Autowired
    private RequestService requestService;


    @PostMapping("/createRequest")
    public ResponseEntity<Object> createRequest(@RequestBody RequestDTO requestDTO) {
        try {
            RequestDTO createdRequest = requestService.createRequest(requestDTO);
            return ResponseEntity.ok(createdRequest);
        } catch (Exception ex) {
            // Mensaje personalizado para cualquier problema
            String errorMessage = "Ocurrió un problema al procesar la solicitud,parent o nanny no existen.";
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
        }
    }
   // @PostMapping
   // public ResponseEntity<RequestDTO> createRequest(@RequestBody RequestDTO requestDTO) {
   //
       // RequestDTO createdRequest = requestService.createRequest(requestDTO);
       // return ResponseEntity.ok(createdRequest);

    @PutMapping("/{requestId}/accept")
    public ResponseEntity<Object> acceptRequest(@PathVariable Long requestId) {
        requestService.acceptRequest(requestId);
        return ResponseEntity.ok().build();
    }
    @PutMapping("/{requestId}/reject")
    public ResponseEntity<Object> rejectRequest(@PathVariable Long requestId) {
        requestService.rejectRequest(requestId);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/nanny/{nannyId}")
    public ResponseEntity<List<RequestDTO>> getAllRequestsForNanny(@PathVariable Long nannyId) {
        List<RequestDTO> requests = requestService.getAllRequestsForNanny(nannyId);
        return ResponseEntity.ok(requests);
    }

    // Obtener todas las solicitudes del Parent
    @GetMapping("/parent/{parentId}")
    public ResponseEntity<List<RequestDTO>> getAllRequestsForParent(@PathVariable Long parentId) {
        List<RequestDTO> requests = requestService.getAllRequestsForParent(parentId);
        return ResponseEntity.ok(requests);
    }
}
