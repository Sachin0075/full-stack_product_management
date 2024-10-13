package com.springboot.employee_springboot.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.springboot.employee_springboot.Entity.Product;
@CrossOrigin(origins="http://localhost:3000")
@RepositoryRestResource(path = "products")
public interface MyRepository extends JpaRepository<Product, Integer>{
    
}
