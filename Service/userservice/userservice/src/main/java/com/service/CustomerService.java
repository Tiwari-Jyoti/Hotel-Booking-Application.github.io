package com.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.model.Answer;
import com.model.Customer;
import com.model.Favourite;
import com.model.Question;
import com.repository.CustomerRepo;

@Service
public class CustomerService implements UserDetailsService {

	@Autowired
	private CustomerRepo customerRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		List<SimpleGrantedAuthority> roles = null;
		Customer c = customerRepository.findByUsername(username);
		if (c != null) {
			roles = Arrays.asList(new SimpleGrantedAuthority(c.getRole()));
			return new User(c.getUsername(), c.getPassword(), roles);
		}
		throw new UsernameNotFoundException("User not Found With Username " + username);
	}

//	this method to Register the customer for Application
	public Customer registerCustomer(Customer customer) throws Exception {
		Customer c1 = customerRepository.findByEmail(customer.getEmail());
		Customer c2 = customerRepository.findByUsername(customer.getUsername());
		if (c1 != null && c2 != null) {
			throw new Exception("User already Exist with " + customer.getEmail());
		} else {
			customer.setPassword(bcryptEncoder.encode(customer.getPassword()));
			return customerRepository.save(customer);
		}

	}

//	method to add the site location to Favourites
	public Customer AddToFavourites(int uid, int placeID) throws Exception {
		Customer c = customerRepository.getById(uid);
		if (c != null) {
			Favourite fav = new Favourite(placeID);
			System.out.println(c.getFavourites());
			c.addtoFavourites(fav);
			customerRepository.save(fav);
			return c;
		} else {
			throw new UsernameNotFoundException("User not found");
		}
	}

//	method to delete location to favourite
	public void deleteFav(int id) {
		customerRepository.remove(id);
	}

//	method to get all the Customers
	public List<Customer> getallCustomers() {
		return customerRepository.findAll();
	}

//	admin operations

	public void deleteCustomer(String email) {
		Customer c = customerRepository.findByEmail(email);
		if (c != null) {
			customerRepository.delete(c);
			System.out.println("Deleted Successfully");
		} else {
			throw new UsernameNotFoundException(email);
		}
	}

//	Adding Question
	public void addQuestion(Question question) throws Exception {
		Customer customer = customerRepository.getById(question.getCid());
		if (customer != null) {
			customer.addQuestion(question);
			customerRepository.save(question);
		}else{
			throw new Exception("Customer is null");
		}
	}

//adding Answer
public void addAnswer(Answer answer) throws Exception {
	Customer customer = customerRepository.getById(answer.getCid());
	if(customer!=null) {
		Question q = customerRepository.findbyid(answer.getQid());
		if(q!=null) {
			customer.addAnswer(answer);
			q.addanswer(answer);
			customerRepository.save(answer);
		}else {
			throw new Exception(" Question is null");
		}
		
	}else{
		throw new Exception("Customer is null");
	}
}

//to get all Question on console

public List<Question> getallQuestions(){
	return customerRepository.getAllQuestion();
}
///to getUserQuestions 

public List<Question> getUserQuestions(int id){
	return customerRepository.findUserQuestion(id);
}

//to update user
public void updateUser(int uid,String phone,String address) {
	customerRepository.updateUser(uid, phone, address);
}
//to delete customer
public void deleteCustomer(int id) {
	customerRepository.deleteUser(id);
}

}
