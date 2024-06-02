
package com.childcaresolutions.childcare_app.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Parent {
       @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 
    private String name;
    private String email;
    private String password;
    private String photo;
    private boolean availability;
    private String location;
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
