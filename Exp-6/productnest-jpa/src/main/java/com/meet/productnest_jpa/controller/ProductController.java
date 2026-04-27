package com.meet.productnest_jpa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.meet.productnest_jpa.entity.Product;
import com.meet.productnest_jpa.repository.ProductRepository;

@RestController
@RequestMapping("/products")
public class ProductController {

@Autowired
private ProductRepository repository;

@GetMapping
public List<Product> allProducts(){
return repository.findAll();
}

@GetMapping("/range")
public List<Product> byPrice(
@RequestParam double min,
@RequestParam double max){
return repository.findByPriceRange(min,max);
}

@PostMapping
public Product saveProduct(
@RequestBody Product product){
return repository.save(product);
}

}