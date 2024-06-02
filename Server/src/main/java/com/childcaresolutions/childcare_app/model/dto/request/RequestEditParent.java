package com.childcaresolutions.childcare_app.model.dto.request;

public record RequestEditParent(

        Long id,
        String name,
        String email,
        String password,
        String photo,
        boolean availability,
        String location,
         String phoneNumber,
        int numberOfChildren,
        String infoFamily,
        boolean isPremium



) {
}
