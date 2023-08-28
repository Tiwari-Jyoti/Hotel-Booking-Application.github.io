package com.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.method.P;
import org.springframework.stereotype.Repository;

import com.model.Answer;
import com.model.Customer;
import com.model.Favourite;
import com.model.Question;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Integer>{

	Customer findByUsername(String username);

	Customer findByEmail(String email);

	@Query("select m from Favourite m where m.placeID = :pid ")
	Favourite findByPlaceId(@Param("pid") int placeID);

	void save(Favourite fav);
	
	@Modifying
	@Transactional
	@Query("delete from Favourite f where f.placeID = :pid")
	public void remove(@Param("pid") int pid);

	void save(Question question);


	void save(Answer answer);
	
	@Query("select m from Question m")
	public List<Question> getAllQuestion();
	
	@Query("select m from Question m where m.id = :id")
	public Question findbyid(@Param("id") int id);
	
	@Query("select m from Question m where m.cid = :id")
	public List<Question> findUserQuestion(@Param("id") int id);
	
	@Modifying
	@Transactional
	@Query("update Customer c set c.phone =:phn , c.Address = :add where c.id = :id")
	public void updateUser(@Param("id") int id,@Param("phn") String phone,@Param("add") String Address);
	
	@Modifying
	@Transactional
	@Query("delete from Customer c where c.id = :id")
	public void deleteUser(@Param("id") int id);
	
	


}
