package com.launchcode.java_spring_boot_back_end_app.controllers;

import com.launchcode.java_spring_boot_back_end_app.models.Puzzle;
import com.launchcode.java_spring_boot_back_end_app.repositories.PuzzleRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/puzzles")
public class PuzzleController {
    @Autowired
    private PuzzleRepository puzzleRepository;

    @GetMapping
    public List<Puzzle>getAllPuzzles() {
        return puzzleRepository.findAll();
    }
}
