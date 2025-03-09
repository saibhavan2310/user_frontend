package com.example.user.controllers;

import com.example.user.models.User;
import com.example.user.repository.UserRepository;
import com.example.user.clients.NotificationClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private NotificationClient notificationClient; // ✅ Inject Feign Client

    // ✅ Get All Users
    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    // ✅ Add User and Send Notification
    @PostMapping
    public User addUser(@RequestBody User user) {
        User savedUser = userRepository.save(user);
        
        // ✅ Call Notification Service after saving user
        notificationClient.sendNotification(user.getEmail(), "Welcome, " + user.getName());

        return savedUser;
    }

    // ✅ Delete User by ID
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
