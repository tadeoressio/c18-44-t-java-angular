package com.childcaresolutions.childcare_app.model.dto.request;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public record RequestCreateParent(

        @NotNull
        Long id,
        @Size(min = 2, max = 20, message = "firstName must be between 2 and 20 characters in length")
        String name,
        @Size(min = 2, max = 20, message = "secondName must be between 2 and 20 characters in length")
        String email,
        @Size(min = 2, max = 20, message = "secondName must be between 2 and 20 characters in length")
        String password,
        String photo,
        boolean availability,
        String location,
        String phoneNumber,
        int numberOfChildren,
        String infoFamily

        //no need nannyRate

) {
}
