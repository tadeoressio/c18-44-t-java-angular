package com.childcaresolutions.childcare_app.model.dto.request.requestDto;

import com.childcaresolutions.childcare_app.enums.RequestStatus;

public record RequestDTO(

        Long id,
        Long nannyId,
        Long parentId,
        RequestStatus status,
        String comment,
        String contactMethod
) {
}
