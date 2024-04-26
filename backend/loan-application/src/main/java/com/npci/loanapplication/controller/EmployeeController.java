package com.npci.loanapplication.controller;

import com.npci.loanapplication.model.Employee;
import com.npci.loanapplication.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/login")
    public ResponseEntity<Employee> loginCustomer(@RequestParam String email, @RequestParam String password) {
        Employee employee = employeeService.login(email, password);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }
}
