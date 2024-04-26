package com.npci.loanapplication.service.serviceImpl;

import com.npci.loanapplication.model.Employee;
import com.npci.loanapplication.repository.EmployeeRepository;
import com.npci.loanapplication.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;


    @Override
    public Employee login(String email, String password) {
        // Validate input fields
        if (StringUtils.isEmpty(email) || StringUtils.isEmpty(password)) {
            throw new IllegalArgumentException("Email and password are required");
        }

        // Retrieve all users from the database
        List<Employee> employees = employeeRepository.findAll();

        // Check if credentials are valid by iterating over the list of users
        for (Employee employee : employees) {
            if (employee.getEmailId().equals(email) && employee.getPassword().equals(password)) {
                return employee; // Return the employee if credentials match
            }
        }

        throw new IllegalArgumentException("Invalid email or password");
    }

    @Override
    public void updateLoanStatus(long loanId) {

    }
}
