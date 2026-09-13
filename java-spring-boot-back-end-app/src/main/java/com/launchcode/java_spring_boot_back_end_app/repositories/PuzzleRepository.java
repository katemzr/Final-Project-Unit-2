package com.launchcode.java_spring_boot_back_end_app.repositories;

import com.launchcode.java_spring_boot_back_end_app.models.Puzzle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PuzzleRepository extends JpaRepository<Puzzle, Integer> {
}
