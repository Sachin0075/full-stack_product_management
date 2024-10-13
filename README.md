# full-stack_product_management
Product Management System built with React and Spring Boot for managing products. Full-stack development integration.


#backend
install jdk 17 or higher
open springboot application
add this in application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/product_details
spring.datasource.username=root
spring.datasource.password=Sachin#5


#Front-End
download and install nodejs

#
open react project and in the cmd promt 
npm install i
npm install react-router-dom@latest


add the bootstrap links for css and js 
in index.html



#MYSQL
download mysql server
and mysql workbnch



and paste this code 
CREATE DATABASE  IF NOT EXISTS `product_details`;
USE `product_details`;
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `price` DECIMAL(10, 2) DEFAULT NULL,  
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
INSERT INTO `product` (`product_name`, `description`, `price`, `status`) 
VALUES 
('Product A', 'Description A', 100.50, 'Available'),
('Product B', 'Description B', 200.00, 'Out of Stock'),
('Product C', 'Description C', 150.75, 'Available'),
('Product D', 'Description D', 80.20, 'Available'),
('Product E', 'Description E', 300.99, 'Discontinued');


