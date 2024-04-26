package com.npci.loanapplication.service.serviceImpl;

import com.npci.loanapplication.model.Customer;
import com.npci.loanapplication.repository.CustomerRepository;
import com.npci.loanapplication.service.CustomerService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;


    @Override
    public Customer registerCustomer(Customer customer) {
        // Validate input fields
        if (StringUtils.isEmpty(customer.getFirstName()) || StringUtils.isEmpty(customer.getLastName())
                || StringUtils.isEmpty(customer.getEmailId()) || StringUtils.isEmpty(customer.getPassword())
                || StringUtils.isEmpty(customer.getPan()) || StringUtils.isEmpty(customer.getPhone())) {
            throw new IllegalArgumentException("All fields are mandatory");
        }

        // Check if email is already registered
        if (customerRepository.findById(customer.getCustomerId()).isPresent()) {
            throw new IllegalArgumentException("Email is already registered");
        }



        // Create Customer entity and save to database
        Customer newCustomer = new Customer();
        newCustomer.setFirstName(customer.getFirstName());
        newCustomer.setLastName(customer.getLastName());
        newCustomer.setEmailId(customer.getEmailId());
        newCustomer.setPassword(customer.getPassword());
        newCustomer.setPan(customer.getPan());
        newCustomer.setPhone(customer.getPhone());

        return customerRepository.save(newCustomer);
    }



    @Override
    public Customer login(String email, String password) {
        // Validate input fields
        if (StringUtils.isEmpty(email) || StringUtils.isEmpty(password)) {
            throw new IllegalArgumentException("Email and password are required");
        }

        // Retrieve all users from the database
        List<Customer> customers = customerRepository.findAll();

        // Check if credentials are valid by iterating over the list of users
        for (Customer customer : customers) {
            if (customer.getEmailId().equals(email) && customer.getPassword().equals(password)) {
                return customer; // Return the customer if credentials match
            }
        }

        throw new IllegalArgumentException("Invalid email or password");
    }

}
