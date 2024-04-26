package com.npci.loanapplication.repository;

import com.npci.loanapplication.model.Customer;
import com.npci.loanapplication.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
