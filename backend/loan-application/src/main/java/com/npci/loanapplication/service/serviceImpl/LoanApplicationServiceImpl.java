package com.npci.loanapplication.service.serviceImpl;

import com.npci.loanapplication.model.LoanApplication;
import com.npci.loanapplication.repository.LoanApplicationRepository;
import com.npci.loanapplication.service.LoanApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanApplicationServiceImpl implements LoanApplicationService {

    @Autowired
    private LoanApplicationRepository loanApplicationRepository;

    @Override
    public LoanApplication addLoanApplication(LoanApplication loanApplication) {
        // Check if email is already registered
        if (loanApplicationRepository.findById(loanApplication.getApplicationId()).isPresent()) {
            throw new IllegalArgumentException("Email is already registered");
        }
        LoanApplication newLoan = new LoanApplication();
        newLoan.setCustomerId(loanApplication.getCustomerId());
        newLoan.setLoanId(loanApplication.getLoanId());
        newLoan.setStatus(loanApplication.getStatus());
        return loanApplicationRepository.save(newLoan);
    }

    @Override
    public List<LoanApplication> getAllLoans() {
        return loanApplicationRepository.findAll();
    }
}
