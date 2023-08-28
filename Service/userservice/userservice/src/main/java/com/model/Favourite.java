package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Favourite {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int placeID;
	
	public Favourite() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Favourite( int placeID) {
		super();
		
		this.placeID = placeID;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPlaceID() {
		return placeID;
	}

	public void setPlaceID(int placeID) {
		this.placeID = placeID;
	}
	
	
	
	

}
