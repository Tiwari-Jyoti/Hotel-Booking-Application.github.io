package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class mailService {
	
	@Autowired
	private JavaMailSender mailsender;
	
	
	public void sendEmail(String tomail,String Subject,String body) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("tiwariaditya1122@gmail.com");
		message.setTo(tomail);
		message.setText(body);
		message.setSubject(Subject);
		
		mailsender.send(message);
		System.out.println("Message sent!!");
	}

}
