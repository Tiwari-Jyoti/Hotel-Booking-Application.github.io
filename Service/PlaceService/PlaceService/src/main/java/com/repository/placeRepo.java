package com.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.Place;
import com.model.image;

@Repository
public interface placeRepo extends JpaRepository<Place, Integer> {

	@Modifying
	@Transactional
	@Query("update Place m set m.contact = :contact,m.price=:price where m.id= :id")
	void updateplace(@Param("contact") String contact,@Param("price") float price ,@Param("id") int id);
	
	
	@Modifying
	@Transactional
	@Query("update Place m set m.reserved =:status where m.id = :id")
	void updatestatus(@Param("id") int id,@Param("status") String status);

	
	@Query("select m from Place m order by m.rating desc")
	List<Place> findplacesBasedonrating();

	@Query("select m from Place m order by m.rating asc")
	List<Place> getplacebt();
	
	@Modifying
	@Transactional
	@Query("update Place m set m.name =:name where m.id = :id")
	void updateplacename(@Param("name") String name,@Param("id") int id );
	
	@Modifying
	@Transactional
	@Query("update Place m set m.price =:price where m.id = :id")
	void updateplaceprice(@Param("price") float price,@Param("id") int id);
	
	@Modifying
	@Transactional
	@Query("update Place m set m.location =:loc where m.id = :id")
	void updateplacelocation(@Param("loc") String name,@Param("id") int id);
	
	
	@Modifying
	@Transactional
	@Query("update Place m set m.contact =:con where m.id = :id")
	void updateplacecontact(@Param("con") String name,@Param("id") int id);
	
	
	@Modifying
	@Transactional
	@Query("update Place m set m.Description =:desc where m.id = :id")
	void updateplacedesc(@Param("desc") String name,@Param("id") int id);
	
	
	@Modifying
	@Transactional
	@Query("update Place m set m.rating =:rate where m.id = :id")
	void updateplacerating(@Param("rate") int name,@Param("id") int id);
	
	@Modifying
	@Transactional
	@Query("update Place m set m.type =:type where m.id = :id")
	void updateplacetype(@Param("type") String name,@Param("id") int id);
	
	
	@Query("select m from Place m where m.location like concat('%',:name,'%')")
	List<Place> searchplace(@Param("name") String name);
	
	@Query("select m from Place m where m.viewpoint like concat('%',:name,'%')")
	List<Place> searchplacebyfeatures(@Param("name") String name);
	

	
	
	
	

	
	

}
