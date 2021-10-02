package com.hungnghia.springbootbackend.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@Data
public class UserDto {
    private String fullname;
    private String username;
    private String password;
    private String email;
    private String gender;
    private String address;
    private String phonenumber;
    private String birthday;
    private String role;
}
