
package com.childcaresolutions.childcare_app.repository;

import com.childcaresolutions.childcare_app.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRequestRepository extends JpaRepository<Request , Long>{
    List<Request> findByNannyId(Long nannyId);

    // Método para encontrar solicitudes por Parent
    List<Request> findByParentId(Long parentId);
}
