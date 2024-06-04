
package com.childcaresolutions.childcare_app.model;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

import lombok.*;

@Data
@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Parent extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private  String phoneNumber;
    private int numberOfChildren; 
    private String infoFamily;
    private boolean isPremium;
    
    
    
    //Un padre puede tener muchos hijos
     @OneToMany(mappedBy = "parent")
     private List<Child> childrens;
     
    //Un padre puede tener muchas solicitudes
     @OneToMany(mappedBy = "parent")
     private List<Request> requests;
     
     //Un padre puede tener muchas Niñeras Favoritas
     
    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL)
    private List<NannyFavorite> nannyFavorites;
    
       // Relación OneToMany con las reseñas escritas por este padre
    @OneToMany(mappedBy = "parent")
    private List<Review> reviews;



    
}
