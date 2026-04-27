package com.meet.secureauthjwt.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

@GetMapping("/login")
public String login(){
return "Login endpoint public";
}

@GetMapping("/welcome")
public String welcome(){
return "Welcome Public Route";
}

}