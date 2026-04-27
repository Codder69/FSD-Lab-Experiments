package com.meet.productnest_jpa.repository;

import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import com.meet.productnest_jpa.entity.Product;

public interface ProductRepository
extends JpaRepository<Product,Long>{

@Query("SELECT p FROM Product p WHERE p.price BETWEEN :min AND :max")
List<Product> findByPriceRange(
@Param("min") double min,
@Param("max") double max
);

}