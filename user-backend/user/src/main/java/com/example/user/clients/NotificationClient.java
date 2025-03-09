package com.example.user.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "notification-service") // ✅ Ensure this matches Eureka's service name
public interface NotificationClient {
    @PostMapping("/api/notifications/send")
    void sendNotification(@RequestParam String email, @RequestParam String message);
}
