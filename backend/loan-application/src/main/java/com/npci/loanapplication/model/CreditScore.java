package com.npci.loanapplication.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CreditScore {

    @Id
    private String pan;

    private int score;

    public CreditScore() {
    }

    public CreditScore(int score, String pan) {
        this.score = score;
        this.pan = pan;
    }

    public String getPan() {
        return pan;
    }

    public void setPan(String pan) {
        this.pan = pan;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}

