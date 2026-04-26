package com.meet.studenthub.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meet.studenthub.api.model.Student;
import com.meet.studenthub.api.repository.StudentRepository;

@Service
public class StudentService {

@Autowired
private StudentRepository repository;

public List<Student> getAllStudents(){
return repository.findAll();
}

public Student saveStudent(Student student){
return repository.save(student);
}

public Student updateStudent(Long id, Student student){

Student existing=
repository.findById(id).orElseThrow();

existing.setName(student.getName());
existing.setCourse(student.getCourse());

return repository.save(existing);
}

public void deleteStudent(Long id){
repository.deleteById(id);
}

}