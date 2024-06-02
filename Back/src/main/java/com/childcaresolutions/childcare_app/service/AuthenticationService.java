package com.childcaresolutions.childcare_app.service;

import com.childcaresolutions.childcare_app.model.Parent;
import com.childcaresolutions.childcare_app.model.dto.request.RequestLogin;
import com.childcaresolutions.childcare_app.model.dto.respose.ResponseLogin;
import com.childcaresolutions.childcare_app.repository.IParentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class AuthenticationService implements IAuthenticationService {

    private final IParentRepository parentRepository;

    @Override
    public  ResponseLogin login(RequestLogin requestLogin) {
        // Buscar el padre por su email en la base de datos
        Optional<Parent> optionalParent = parentRepository.findByEmail(requestLogin.email());
        if (optionalParent.isPresent()) {
            Parent parent = optionalParent.get();
            // Verificar la contraseña
            if (requestLogin.password().equals(parent.getPassword())) {
                // Devolver la respuesta de login con solo el ID
                ResponseLogin responseLogin = new ResponseLogin(parent.getId());
                return responseLogin;
            }
        }
        // Retornar una respuesta de error si no se encuentra el padre o la contraseña es incorrecta
        return null;
    }
}