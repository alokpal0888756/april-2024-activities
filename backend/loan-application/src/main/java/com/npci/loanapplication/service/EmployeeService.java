package com.npci.loanapplication.service;

import com.npci.loanapplication.model.Employee;
import org.springframework.stereotype.Service;

@Service
public interface EmployeeService {
    Employee login(String username, String password);
    void updateLoanStatus(long loanId);


}
