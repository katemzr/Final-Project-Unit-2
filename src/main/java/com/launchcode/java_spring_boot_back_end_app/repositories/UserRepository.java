package com.launchcode.java_spring_boot_back_end_app.repositories;

import com.launchcode.java_spring_boot_back_end_app.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
