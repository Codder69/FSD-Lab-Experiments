package com.meet.secureauthjwt.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class RoleController {

@GetMapping("/user/profile")
public String userProfile(){
return "User profile accessed";
}

@GetMapping("/admin/dashboard")
public String adminDashboard(){
return "Admin dashboard accessed";
}

}