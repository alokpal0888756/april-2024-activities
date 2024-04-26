package com.npci.loanapplication.service;

import com.npci.loanapplication.model.LoanApplication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LoanApplicationService {
    LoanApplication addLoanApplication(LoanApplication loanApplication);
    List<LoanApplication> getAllLoans();
}
