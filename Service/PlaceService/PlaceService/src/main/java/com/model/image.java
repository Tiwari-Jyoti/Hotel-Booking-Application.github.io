package com.model;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


public class image {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String image;
	private int pid;
	public image() {
		super();
		// TODO Auto-generated constructor stub
	}
	public image(String image, int placeid) {
		super();
		this.image = image;
		this.pid = placeid;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getPlaceid() {
		return pid;
	}
	public void setPlaceid(int placeid) {
		this.pid = placeid;
	}
	

}
