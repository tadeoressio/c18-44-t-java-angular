package com.childcaresolutions.childcare_app.model.dto.mapper;

import com.childcaresolutions.childcare_app.model.Request;
import com.childcaresolutions.childcare_app.model.dto.request.requestDto.RequestDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface RequestMapper {
    RequestMapper INSTANCE = Mappers.getMapper(RequestMapper.class);
    @Mapping(source = "nanny.id", target = "nannyId")
    @Mapping(source = "parent.id", target = "parentId")
    RequestDTO requestToRequestDTO(Request request);

    @Mapping(source = "nannyId", target = "nanny.id")
    @Mapping(source = "parentId", target = "parent.id")
    Request requestDTOToRequest(RequestDTO requestDTO);
}
