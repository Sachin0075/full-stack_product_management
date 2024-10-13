package com.springboot.employee_springboot.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="product")
public class Product {

    public Product()
    {

    }

    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    int id;
    
    @Column(name="product_name")
    String productName;
    @Column(name="description")
    String description;
    
    @Column(name="price")
    Double price;
    @Column(name="status")
    String status;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public Product(String productName, String description, Double price, String status) {
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.status = status;
    }
    @Override
    public String toString() {
        return "Product [productName=" + productName + ", description=" + description + ", price=" + price + ", status="
                + status + "]";
    }
  
    

    
}
