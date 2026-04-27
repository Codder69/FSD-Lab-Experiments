package com.meet.secureauthjwt.config;

import org.springframework.context.annotation.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.Customizer;

@Configuration
public class SecurityConfig {

@Bean
public UserDetailsService users(){

UserDetails user=
User.withDefaultPasswordEncoder()
.username("user")
.password("1234")
.roles("USER")
.build();

UserDetails admin=
User.withDefaultPasswordEncoder()
.username("admin")
.password("admin123")
.roles("ADMIN")
.build();

return new InMemoryUserDetailsManager(user,admin);
}

@Bean
public SecurityFilterChain filterChain(HttpSecurity http)
throws Exception {

http
.csrf(csrf->csrf.disable())
.authorizeHttpRequests(auth->auth
.requestMatchers("/auth/login").permitAll()
.requestMatchers("/api/admin/**").hasRole("ADMIN")
.requestMatchers("/api/user/**").hasRole("USER")
.anyRequest().authenticated()
)
.httpBasic(Customizer.withDefaults());

return http.build();

}

}