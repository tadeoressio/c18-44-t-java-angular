package com.childcaresolutions.childcare_app.controller;

import com.childcaresolutions.childcare_app.model.dto.request.RequestLogin;
import com.childcaresolutions.childcare_app.model.dto.respose.ResponseLogin;
import com.childcaresolutions.childcare_app.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/login")
public class LoginController {

    private final AuthenticationService authenticationService;


    @PostMapping("/login")
    public ResponseEntity<ResponseLogin> login(
            @RequestBody @Valid @NotNull RequestLogin requestLogin,
            BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            // Manejar errores de validación
            return ResponseEntity.badRequest().build();
        }

        ResponseLogin responseLogin = authenticationService.login(requestLogin);

        if (responseLogin != null) {
            return ResponseEntity.ok(responseLogin);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
