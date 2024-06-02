
package com.childcaresolutions.childcare_app.service;

import com.childcaresolutions.childcare_app.repository.INannyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NannyService {
    
    @Autowired
    INannyRepository nannyRepo;
    
}
