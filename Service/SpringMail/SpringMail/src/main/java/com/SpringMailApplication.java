package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SpringMailApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringMailApplication.class, args);
		System.out.println("Server up on 8383");
	}

}
