
package com.childcaresolutions.childcare_app.service;

import com.childcaresolutions.childcare_app.enums.RequestStatus;
import com.childcaresolutions.childcare_app.model.Request;
import com.childcaresolutions.childcare_app.model.dto.mapper.RequestMapper;
import com.childcaresolutions.childcare_app.model.dto.request.requestDto.RequestDTO;
import com.childcaresolutions.childcare_app.repository.IRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RequestService {
    
    
    
  @Autowired
  IRequestRepository requestRepository;


  public RequestDTO createRequest(RequestDTO requestDTO) {
    Request request = RequestMapper.INSTANCE.requestDTOToRequest(requestDTO);
    request.setStatus(RequestStatus.Pending); // Establece el estado inicial como Pending
    Request savedRequest = requestRepository.save(request);
    return RequestMapper.INSTANCE.requestToRequestDTO(savedRequest);
  }

  @Transactional
  public void rejectRequest(Long requestId) {
    Request request = requestRepository.findById(requestId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Solicitud no encontrada"));

    request.setStatus(RequestStatus.Rejected);
    // Aquí podrías realizar otras operaciones necesarias al rechazar la solicitud

    // Guardar los cambios
    requestRepository.save(request);
  }

  @Transactional
  public void acceptRequest(Long requestId) {
    Request request = requestRepository.findById(requestId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Solicitud no encontrada"));

    request.setStatus(RequestStatus.Accepted);
    // Aquí podrías realizar otras operaciones necesarias al aceptar la solicitud

    // Guardar los cambios
    requestRepository.save(request);
  }

  @Transactional(readOnly = true)
  public List<RequestDTO> getAllRequestsForNanny(Long nannyId) {
    List<Request> requests = requestRepository.findByNannyId(nannyId);
    return requests.stream()
            .map(this::mapToRequestDTO)
            .collect(Collectors.toList());
  }

  @Transactional(readOnly = true)
  public List<RequestDTO> getAllRequestsForParent(Long parentId) {
    List<Request> requests = requestRepository.findByParentId(parentId);
    return requests.stream()
            .map(this::mapToRequestDTO)
            .collect(Collectors.toList());
  }

  private RequestDTO mapToRequestDTO(Request request) {
    return new RequestDTO(
            request.getId(),
            request.getNanny().getId(),
            request.getParent().getId(),
            request.getStatus(),
            request.getComment(),
            request.getContactMethod()
    );
  }
 // private RequestDTO mapToRequestDTO(Request request) {
 //   RequestDTO requestDTO = new RequestDTO();
 //   // Mapear los campos relevantes de la entidad Request a RequestDTO
 //   requestDTO.setId(request.getId());
 //   requestDTO.setStatus(request.getStatus());
 //   // Otros mapeos según sea necesario
//
 //   return requestDTO;
 // }
}
