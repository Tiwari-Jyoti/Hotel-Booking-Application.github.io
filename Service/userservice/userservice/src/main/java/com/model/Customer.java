package com.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
@Entity
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String username;
	private String email;
	private String password;
	private String phone;
	private String role;
	private String Address;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id")
	private List<Favourite> favourites;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="cid")
	private List<Question> questions;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="cid")
	private List<Answer> answers;
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(String username, String email, String password, String phone, String address,String role) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.phone = phone;
		Address = address;
		this.role=role;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public List<Favourite> getFavourites() {
		return favourites;
	}
	public void setFavourites(List<Favourite> favourites) {
		this.favourites = favourites;
	}
	
	public List<Question> getQuestions() {
		return questions;
	}
	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}
	public List<Answer> getAnswers() {
		return answers;
	}
	public void setAnswers(List<Answer> answers) {
		this.answers = answers;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public void addtoFavourites(Favourite favourite) {
		if(this.favourites == null) {
			this.favourites = new ArrayList<Favourite>();
		}
		this.favourites.add(favourite);
	}
	public void addQuestion(Question question) {
		if(this.questions==null) {
			this.questions= new ArrayList<Question>();
		}
		this.questions.add(question);
	}
	
	public void addAnswer(Answer answer) {
		if(this.answers==null) {
			this.answers= new ArrayList<Answer>();
		}
		this.answers.add(answer);
	}
	
	

}
