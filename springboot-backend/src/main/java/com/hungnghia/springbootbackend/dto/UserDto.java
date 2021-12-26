package com.hungnghia.springbootbackend.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.sql.Date;

@Data
public class UserDto {
    private Long id;
    private String fullname;
    private String username;
    private String password;
    private String email;
    private String gender;
    private String address;
    private String phonenumber;
    private String birthday;
    private String role;
    private String avatar;
}
