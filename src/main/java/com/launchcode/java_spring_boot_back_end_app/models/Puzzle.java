package com.launchcode.java_spring_boot_back_end_app.models;

import jakarta.persistence.*;
import org.apache.catalina.User;

import java.time.LocalDate;

@Entity
@Table(name = "puzzle")
public class Puzzle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String brand;
    private String artist;
    private int pieceCount;
    private float height;
    private float width;
    private String location;
    private LocalDate purchaseDate;
    private String retailer;
    private LocalDate startDate;
    private String notes;
    private int progressPercent;
    private int completionTime;
/*
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
*/
    public Puzzle() {
    }

    public Puzzle(String title,
                  String brand,
                  String artist,
                  int pieceCount,
                  float height,
                  float width,
                  String location,
                  LocalDate purchaseDate,
                  String retailer,
                  LocalDate startDate,
                  String notes,
                  int progressPercent,
                  int completionTime) {
        this.title = title;
        this.brand = brand;
        this.artist = artist;
        this.pieceCount = pieceCount;
        this.height = height;
        this.width = width;
        this.location = location;
        this.purchaseDate = purchaseDate;
        this.retailer = retailer;
        this.startDate = startDate;
        this.notes = notes;
        this.progressPercent = progressPercent;
        this.completionTime = completionTime;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public int getPieceCount() {
        return pieceCount;
    }

    public void setPieceCount(int pieceCount) {
        this.pieceCount = pieceCount;
    }

    public float getHeight() {
        return height;
    }

    public void setHeight(float height) {
        this.height = height;
    }

    public float getWidth() {
        return width;
    }

    public void setWidth(float width) {
        this.width = width;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public LocalDate getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(LocalDate purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public String getRetailer() {
        return retailer;
    }

    public void setRetailer(String retailer) {
        this.retailer = retailer;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public int getProgressPercent() {
        return progressPercent;
    }

    public void setProgressPercent(int progressPercent) {
        this.progressPercent = progressPercent;
    }

    public int getCompletionTime() {
        return completionTime;
    }

    public void setCompletionTime(int completionTime) {
        this.completionTime = completionTime;
    }
/*
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
*/
}
