package com.meet.productnest_jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.meet.productnest_jpa.entity.Category;

public interface CategoryRepository
extends JpaRepository<Category,Long>{

}