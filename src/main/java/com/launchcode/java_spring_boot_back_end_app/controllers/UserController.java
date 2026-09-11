package com.launchcode.java_spring_boot_back_end_app.controllers;

import com.launchcode.java_spring_boot_back_end_app.models.User;
import com.launchcode.java_spring_boot_back_end_app.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User>getAllUsers() {
        return userRepository.findAll();
    }
}
