package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Place;
import com.model.image;
import com.repository.placeRepo;

@Service
public class placeService {
	
	@Autowired
	private placeRepo placeRepo;
	
	
//	method to add the place
	public Place addplace(Place place) {
		return placeRepo.save(place);
	}
	
// method to update place
	public void updateplace(String contact,float price,int id) {
		 placeRepo.updateplace(contact,price,id);
	}
	
//method to reserve the place 
	
	public void reservePlace(int id,String status) {
		 placeRepo.updatestatus(id,status);
	}
// method to get the places based on rating (top-bottom)
	
	public List<Place> getsortedplacestb(){
		return placeRepo.findplacesBasedonrating();
	}
	
//	method to get the places based on rating (low-top)
	public List<Place> getplacedbt(){
		return placeRepo.getplacebt();
	}
	
//	method to delete the place
	
	public void deleteplace(int id) {
		Place p = placeRepo.getById(id);
		placeRepo.delete(p);
	}
	
//	method to get all the places 
	public List<Place> getallplaces(){
		return placeRepo.findAll();
	}
	
	public void updateplacename(String name ,int pid) {
		placeRepo.updateplacename(name, pid);
	}
	public void updateplaceprice(float price ,int pid) {
		placeRepo.updateplaceprice(price, pid);
	}
	
	public void updateplacelocation(String name ,int pid) {
		placeRepo.updateplacelocation(name, pid);
	}
	public void updateplacecontact(String name ,int pid) {
		placeRepo.updateplacecontact(name, pid);
	}
	public void updateplacedesc(String name ,int pid) {
		placeRepo.updateplacedesc(name, pid);
	}
	public void updateplacerate(int rate ,int pid) {
		placeRepo.updateplacerating(rate, pid);
	}
	public void updateplacetype(String name ,int pid) {
		placeRepo.updateplacetype(name, pid);
	}
	
//	search place by location
	public List<Place> searchplace(String place){
		return placeRepo.searchplace(place);
	}
	
	public List<Place> searchplacebyfeature(String place){
		return placeRepo.searchplacebyfeatures(place);
	}

}
