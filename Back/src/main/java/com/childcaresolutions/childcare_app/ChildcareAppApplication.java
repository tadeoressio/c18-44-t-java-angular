package com.childcaresolutions.childcare_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

//@ComponentScan(basePackages = "com.childcaresolutions.childcare_app.config")
@SpringBootApplication
public class ChildcareAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChildcareAppApplication.class, args);
	}

}
