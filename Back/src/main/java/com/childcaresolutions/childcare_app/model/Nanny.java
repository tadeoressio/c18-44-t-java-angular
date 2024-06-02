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
public class Nanny {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String photo;
    private String availability;
    private String skills;
    private String experiences;
    private int nannyRate;
    private String location;

    // Relación OneToMany con Request
    @OneToMany(mappedBy = "nanny", cascade = CascadeType.ALL)
    private List<Request> requests;

    // Relación OneToMany con Review
    @OneToMany(mappedBy = "nanny", cascade = CascadeType.ALL)
    private List<Review> reviews;

    // Relación OneToMany con Penalty
    @OneToMany(mappedBy = "nanny", cascade = CascadeType.ALL)
    private List<Penalty> penalidades;
}
