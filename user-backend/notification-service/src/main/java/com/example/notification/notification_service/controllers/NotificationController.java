package com.example.notification.notification_service.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {
	
	@PostMapping("/send")
	public String sendNotifications(@RequestParam String email,@RequestParam String message) {
		System.out.println("📩 Sending email to: " + email);
        System.out.println("Message: " + message);
        return "Notification sent successfully!";
	}

}
