
package com.childcaresolutions.childcare_app.repository;

import com.childcaresolutions.childcare_app.model.Nanny;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface INannyRepository extends JpaRepository<Nanny , Long>{

    //<Objet>
    Optional<Nanny> findByEmail(String email);
    List<Nanny> findAll();
    //List<Nanny> findAllByActive(boolean active);

}
