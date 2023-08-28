package com.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Answer;
import com.model.Customer;
import com.model.Question;
import com.service.CustomerService;

@RestController
@CrossOrigin
public class customerController {
	
	@Autowired
	private CustomerService customerService;
	
	
	@PostMapping(value = "favourite/{uid}/{pid}")
	public Customer AddplacetoFavourite(@PathVariable("uid") int uid,@PathVariable("pid") int pid) throws Exception {
		return customerService.AddToFavourites(uid, pid);
	}
	@DeleteMapping(value = "deleteFavourite/{pid}")
	public void removeFavourite(@PathVariable("pid") int pid) {
		customerService.deleteFav(pid);
	}
	@DeleteMapping(value = "deleteCustomer/{email}")
	public void deleteCustomer(@PathVariable("email") String email) {
		customerService.deleteCustomer(email);
	}
	@PostMapping(value = "addQuestion")
	public void addingQuestion(@RequestBody Question question) throws Exception {
		customerService.addQuestion(question);
	}
	
	@PostMapping(value = "addAnswer")
	public void addAnswer(@RequestBody Answer answer) throws Exception {
		customerService.addAnswer(answer);
	}
	
//	get all Question of Specific User
	@GetMapping(value = "getUserQuestions/{id}")
	public List<Question> getUserQuestions(@PathVariable("id") int id){
		return customerService.getUserQuestions(id);
	}
	@GetMapping(value = "findallCustomers")
	public List<Customer> getCustomers(){
		return customerService.getallCustomers();
	}
	
//	to get all the Questions 
	@GetMapping(value = "getallQuestions")
	public List<Question> getAllQuestions(){
		return customerService.getallQuestions();
	}
	
//	toupdate User
	@PutMapping(value = "updateUser/{id}/{phn}/{add}")
	public void updateUser(@PathVariable("id") int uid,@PathVariable("phn") String phone,@PathVariable("add") String address) {
		customerService.updateUser(uid, phone, address);
	}
	
//	to ddelete user
	@DeleteMapping(value = "deletecustomer/{id}")
	public void deleteUser(@PathVariable("id") int id) {
		customerService.deleteCustomer(id);
	}

}
