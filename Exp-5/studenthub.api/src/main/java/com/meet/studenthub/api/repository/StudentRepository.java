package com.meet.studenthub.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.meet.studenthub.api.model.Student;

public interface StudentRepository
extends JpaRepository<Student,Long>{

}