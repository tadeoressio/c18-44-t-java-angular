
package com.childcaresolutions.childcare_app.service;

import com.childcaresolutions.childcare_app.exeptions.EmailAlreadyExistsException;
import com.childcaresolutions.childcare_app.exeptions.EntityNotFoundException;
import com.childcaresolutions.childcare_app.model.Parent;
import com.childcaresolutions.childcare_app.model.dto.mapper.ParentMapper;
import com.childcaresolutions.childcare_app.model.dto.request.RequestCreateParent;
import com.childcaresolutions.childcare_app.model.dto.request.RequestEditParent;
import com.childcaresolutions.childcare_app.model.dto.respose.ResponseParent;
import com.childcaresolutions.childcare_app.repository.IParentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class ParentService implements IParentService {

    private final IParentRepository parentRepository;
    private final ParentMapper parentMapper;


    @Override
    public ResponseParent createParent(RequestCreateParent requestCreateParent) {

        // Validar la existencia de un padre con el mismo email
        parentRepository.findByEmail(requestCreateParent.email()).ifPresent(parent -> {
            throw new EmailAlreadyExistsException("Email " + requestCreateParent.email() + " already exists.");
        });

        // Mapear RequestCreateParent a la entidad Parent
        Parent parent = parentMapper.requestCreateToParent(requestCreateParent);

        // Aplicar lógica de negocio adicional
        parent.setAvailability(false);  // Ejemplo de lógica de negocio: todos los padres nuevos son disponibles por defecto

        // Guardar la entidad Parent en la base de datos
        Parent savedParent = parentRepository.save(parent);

        // Registrar el evento
       // logParentCreation(savedParent);

        // Mapear la entidad Parent guardada a ResponseParent
        return parentMapper.parentToRespose(savedParent);


    }

    @Override
    public ResponseParent readParent(Long id) {
        Parent parent = parentRepository.findById(id).orElseThrow (()->
                new EntityNotFoundException("The Parent with id: " + id + " not exist"));
        return parentMapper.parentToRespose(parent);
    }
    @Transactional
    @Override
    public ResponseParent updateParent(RequestEditParent requestEditParent) {
      Parent parent = parentRepository.findById(requestEditParent.id()).orElseThrow(() ->
              new com.childcaresolutions.childcare_app.exeptions.EntityNotFoundException("The Parent with id: " + requestEditParent.id() + " was not found"));

        if (requestEditParent.name() != null) {
            parent.setName(requestEditParent.name());
        }

        if (requestEditParent.email() != null) {
            parent.setEmail(requestEditParent.email());
        }
        //dilate updatePassword ?
        if (requestEditParent.password() != null) {
            parent.setPassword(requestEditParent.password());
        }
        if (requestEditParent.photo() != null) {
            parent.setPhoto(requestEditParent.photo());
        }
        if (requestEditParent.location() != null) {
            parent.setLocation(requestEditParent.location());
        }
        if (requestEditParent.phoneNumber() != null) {
            parent.setPhoneNumber(requestEditParent.phoneNumber());
        }
        if (requestEditParent.numberOfChildren() >= 0) {
            parent.setNumberOfChildren(requestEditParent.numberOfChildren());
        }
        if (requestEditParent.infoFamily() != null) {
            parent.setInfoFamily(requestEditParent.infoFamily());
        }

        Parent updatedParent = parentRepository.save(parent);
        return parentMapper.parentToRespose(updatedParent);

    }

    @Override
    public Boolean toogleDeleteParent(Long id) {
        parentRepository.deleteById(id);
        return true;
    }
}
