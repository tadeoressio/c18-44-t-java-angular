
package com.childcaresolutions.childcare_app.service;


import com.childcaresolutions.childcare_app.model.dto.request.RequestCreateNanny;
import com.childcaresolutions.childcare_app.model.dto.request.RequestEditNanny;
import com.childcaresolutions.childcare_app.model.dto.respose.ResponseNanny;

import java.util.List;

public interface INannyService {

    ResponseNanny createNanny (RequestCreateNanny requestCreateNanny);

    ResponseNanny readNanny (Long id);

    ResponseNanny updateNanny (RequestEditNanny requestUpdateNanny);

    Boolean toogleDeleteNanny(Long id);

    List<ResponseNanny> getAllNannies();

}
