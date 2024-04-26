package com.npci.loanapplication.controller;

import com.npci.loanapplication.model.LoanApplication;
import com.npci.loanapplication.service.LoanApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/loan")
public class LoanApplicationController {

    @Autowired
    private LoanApplicationService loanApplicationService;



    @PostMapping("/save")
    public ResponseEntity<LoanApplication> saveLoan(@RequestBody LoanApplication loanApplication) {
        LoanApplication application = loanApplicationService.addLoanApplication(loanApplication);
        return new ResponseEntity<>(application, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<LoanApplication>> getAllLoans(){
        return ResponseEntity.status(200).body(loanApplicationService.getAllLoans());
    }

}
