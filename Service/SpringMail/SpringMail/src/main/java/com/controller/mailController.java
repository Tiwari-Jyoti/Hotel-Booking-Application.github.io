package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.service.mailService;

@RestController
@CrossOrigin
public class mailController {
	
	@Autowired
	private mailService mailService;
	@PostMapping(value="email")
	public void sendMail(String tomail,String subject,String body) {
		mailService.sendEmail(tomail, subject, body);
	}

}
