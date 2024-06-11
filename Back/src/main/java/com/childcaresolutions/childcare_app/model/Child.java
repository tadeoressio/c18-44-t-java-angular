
package com.childcaresolutions.childcare_app.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class Child {
       @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 
    private String name; 
    private int age; 
    private String description;
    
   // Relación ManyToOne con Parent
    @ManyToOne
    @JoinColumn(name = "parent_id")
    //@JsonBackReference
    //@JsonIgnoreProperties(value="childrens")
    @JsonIgnore
    private Parent parent;
}
