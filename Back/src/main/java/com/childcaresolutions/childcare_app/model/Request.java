
package com.childcaresolutions.childcare_app.model;

import com.childcaresolutions.childcare_app.enums.RequestStatus;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Request {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 
    private RequestStatus status;

    // Comentario opcional del padre
    private String comment;

    // Método de contacto opcional del padre
    private String contactMethod;
    
      // Relación ManyToOne con la niñera
      //Una niñera puede tener muchas solicitudes
    @ManyToOne
    @JoinColumn(name = "nanny_id")
    private Nanny nanny;

    // Relación ManyToOne con el padre
    //Un padre puede tener muchas solicitudes
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Parent parent;
}
