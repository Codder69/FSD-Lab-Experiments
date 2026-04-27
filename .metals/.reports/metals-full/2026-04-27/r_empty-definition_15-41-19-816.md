error id: file:///E:/FSD%20LAB%20EXPERIMENTS/Exp-7/secureauth-jwt/src/main/java/com/meet/secureauthjwt/config/SecurityConfig.java:_empty_/User#withDefaultPasswordEncoder#
file:///E:/FSD%20LAB%20EXPERIMENTS/Exp-7/secureauth-jwt/src/main/java/com/meet/secureauthjwt/config/SecurityConfig.java
empty definition using pc, found symbol in pc: _empty_/User#withDefaultPasswordEncoder#
empty definition using semanticdb
empty definition using fallback
non-local guesses:

offset: 756
uri: file:///E:/FSD%20LAB%20EXPERIMENTS/Exp-7/secureauth-jwt/src/main/java/com/meet/secureauthjwt/config/SecurityConfig.java
text:
```scala
package com.meet.secureauthjwt.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

@Bean
public UserDetailsService users(){

UserDetails user=
User.withDefaultPassword@@Encoder()
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
```


#### Short summary: 

empty definition using pc, found symbol in pc: _empty_/User#withDefaultPasswordEncoder#