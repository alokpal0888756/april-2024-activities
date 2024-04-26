package com.npci.loanapplication.model;

import jakarta.persistence.*;

@Entity
public class LoanApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long applicationId;


    private long customerId;


    private long loanId;

    private String status;

    public LoanApplication() {
    }

    public LoanApplication(long applicationId, long customerId, long loanId, String status) {
        this.applicationId = applicationId;
        this.customerId = customerId;
        this.loanId = loanId;
        this.status = status;
    }

    public long getApplicationId() {
        return applicationId;
    }

    public void setApplicationId(long applicationId) {
        this.applicationId = applicationId;
    }

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    public long getLoanId() {
        return loanId;
    }

    public void setLoanId(long loanId) {
        this.loanId = loanId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
