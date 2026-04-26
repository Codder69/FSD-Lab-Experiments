package com.meet.studenthub.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import com.meet.studenthub.api.model.Student;
import com.meet.studenthub.api.service.StudentService;

@RestController
@RequestMapping("/students")
public class StudentController {

@Autowired
private StudentService service;

@GetMapping
public List<Student> getStudents(){
return service.getAllStudents();
}

@PostMapping
public Student addStudent(
@Valid @RequestBody Student student){
return service.saveStudent(student);
}

@PutMapping("/{id}")
public Student updateStudent(
@PathVariable Long id,
@RequestBody Student student){
return service.updateStudent(id,student);
}

@DeleteMapping("/{id}")
public String deleteStudent(
@PathVariable Long id){
service.deleteStudent(id);
return "Deleted Successfully";
}

}