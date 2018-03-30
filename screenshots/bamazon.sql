DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (

  item_id INT AUTO_INCREMENT NOT NULL,
 
  product_name VARCHAR(20) NOT NULL,
 
  department_name VARCHAR(15),
  
  price DEC(6,2),
  
  stock_quantity INT(25) NOT NULL,
  
  PRIMARY KEY (item_id)
  );
  
  CREATE TABLE departments (

  department_id INTEGER AUTO_INCREMENT NOT NULL,
 
  department_name VARCHAR(20),
 
  over_head_costs INT(7),
  
  PRIMARY KEY (department_id)
  );
  
  INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES ("Chainsaw", "Tools", 200, 25);
 
  INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES ("Alexa", "Electronics", 175, 6);
 
  INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES ("Lamp", "Home and decor", 65, 2);
  
  INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES ("T-shirt", "Clothing", 15, 10);
  
  INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES ("Xbox One", "Electronics", 200, 25);
  
  INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES ("Table", "Furniture", 1000, 3);
  
  INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES ("Ramen Noodle Cup", "Food", .01, 200);
  
  INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES ("Remote", "Electronics", 49, 1);
  
  INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES ("Band Saw", "Tools", 600, 5);
  
  INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES ("Shovel", "Home and Garden", 30, 12);
 

  SELECT * FROM products;