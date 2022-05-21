package com.hungnghia.springbootbackend.controller;

import com.google.gson.Gson;
import com.hungnghia.springbootbackend.dto.MailDto;
import com.hungnghia.springbootbackend.dto.MissPassWordDto;
import com.hungnghia.springbootbackend.dto.UserDto;
import com.hungnghia.springbootbackend.entities.UserEntity;
import com.hungnghia.springbootbackend.service.MailService;
import com.hungnghia.springbootbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;


@RestController
@RequestMapping("/api/")
@CrossOrigin
public class UserController {

    private final UserService userService;
    private final MailService mailService;

    @Autowired
    public UserController(UserService userService, MailService mailService){
        this.userService = userService;
        this.mailService = mailService;
    }

    /*Get all user*/
    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        return userService.getUsers();
    }

    /*Add user*/
    @PostMapping("/users")
    public ResponseEntity<UserEntity> addUser(@RequestPart("userDto") UserDto userDto, @RequestPart("file") MultipartFile file){
        if(userService.checkExistUserName(userDto.getUsername())){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        else if(userService.checkExistEmail(userDto.getEmail())){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else return ResponseEntity.ok(userService.addUser(userDto, file));
    }

    /*Delete User*/
    @DeleteMapping("/users/{id}")
    public ResponseEntity<UserEntity> deleteUser(@PathVariable Long id){
        UserEntity userEntity = userService.deleteUser(id);
        return ResponseEntity.ok(userEntity);
    }

    /*Edit User*/
    @PutMapping("/users/{id}")
    public ResponseEntity<UserEntity> updateUser(@PathVariable Long id, @RequestPart("userDto") UserDto userDto, @RequestPart("file") MultipartFile file){
        if(userService.checkExistUpdateUserName(userDto.getUsername(), userDto.getId())){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        else if(userService.checkExistUpdateEmail(userDto.getEmail(),userDto.getId())){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else {
            UserEntity updateUser = userService.updateUser(id, userDto, file);
            return ResponseEntity.ok(updateUser);
        }
    }
//    @PostMapping("/registerMobile")
//    public ResponseEntity<?> saveUser(@RequestParam String strUser, @RequestPart("file") MultipartFile file){

    @PutMapping("/usersMobile")
    public int updateUser(@RequestParam String strUser, @RequestPart("file") MultipartFile file){
        Gson gson = new Gson();
        UserDto userDto = gson.fromJson(strUser, UserDto.class);

        if(userService.checkExistUpdateUserName(userDto.getUsername(), userDto.getId())){
            return 409;
        }
        else if(userService.checkExistUpdateEmail(userDto.getEmail(),userDto.getId())){
            return 400;
        }
        else {
            UserEntity updateUser = userService.updateUser(userDto.getId(), userDto, file);
            return updateUser !=null ? 200 : 0;
        }
    }
    @PutMapping("/usersMobile2")
    public int updateUser2( @RequestParam String strUser){
        Gson gson = new Gson();
        UserDto userDto = gson.fromJson(strUser, UserDto.class);
        if(userService.checkExistUpdateUserName(userDto.getUsername(), userDto.getId())){
            return 409;
        }
        else if(userService.checkExistUpdateEmail(userDto.getEmail(),userDto.getId())){
            return 400;
        }
        else {
            UserEntity updateUser = userService.updateUser(userDto.getId(), userDto, null);
            return updateUser !=null ? 200 : 0;
        }
    }
    @PutMapping("/users/edit2/{id}")
    public ResponseEntity<UserEntity> updateUser(@PathVariable Long id, @RequestBody UserDto userDto){
        if(userService.checkExistUpdateUserName(userDto.getUsername(), userDto.getId())){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        else if(userService.checkExistUpdateEmail(userDto.getEmail(),userDto.getId())){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else {
            UserEntity updateUser = userService.updateUser(id, userDto, null);
            return ResponseEntity.ok(updateUser);
        }
    }

    /*Get User with id*/
    @GetMapping("/users/{id}")
    public ResponseEntity<UserEntity> getUserById(@PathVariable Long id){
        UserEntity userEntity = userService.getUser(id);
        return ResponseEntity.ok(userEntity);
    }

    @PostMapping("/users/check-username-email")
    public ResponseEntity<String> checkUsernameEmail (@RequestBody MissPassWordDto missPassWordDto){
        if(userService.checkUsernameEmail(missPassWordDto.getUsername(), missPassWordDto.getEmail()) != null){

            /*generatePassword*/
            char[] pass = userService.generatePassword(6);
            String newPass = new String(pass);

            /*Update password*/
            userService.updatePassWord(missPassWordDto.getUsername(), newPass);

            /*Send mail password to user*/
            MailDto mailDto = new MailDto();
            mailDto.setMailFrom("hungduong.mess2000@gmail.com");
            mailDto.setMailTo(missPassWordDto.getEmail());
            mailDto.setMailSubject("Mật khẩu mới !!!!");
            mailDto.setMailContent("Đây là mật khẩu mới của bạn : " + newPass + " !!!! Hãy đăng nhập và đổi lại mật khẩu.");
            mailService.sendEmail(mailDto);
            return new ResponseEntity<>("Gửi email thành công !", HttpStatus.OK);
        }

        return new ResponseEntity<>("Tên đăng nhập hoặc email không chính xác !!!",HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/users/change-passWord")
    public ResponseEntity<String> changPassWord (@RequestParam("username") String username,@RequestParam("passwordOld") String passwordOld, @RequestParam("passwordNew") String passwordNew){
        boolean checkPassWordOld = userService.checkPassWordOld(username, passwordOld);
        if(!checkPassWordOld){
            System.out.println("Mật khẩu không chính xác");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            try{
                return ResponseEntity.ok(userService.userUpdatePassWord(username, passwordNew));
            } catch (Exception e){
                System.out.println("Cập nhật mật khẩu thất bại");
                return new ResponseEntity<>(HttpStatus.CONFLICT);
            }
        }
    }

}
