package com.npci.loanapplication.service;

import com.npci.loanapplication.model.Customer;

public interface CustomerService {
    Customer registerCustomer(Customer customer);
    Customer login(String email, String password);

}