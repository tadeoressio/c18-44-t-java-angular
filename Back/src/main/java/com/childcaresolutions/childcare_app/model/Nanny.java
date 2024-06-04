package com.childcaresolutions.childcare_app.model;

import jakarta.persistence.*;

import java.util.List;

import lombok.*;

@Entity
@Data
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Nanny extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String experiences;
    private int nannyRate;



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
