package com.hungnghia.springbootbackend.config;

import com.cloudinary.Cloudinary;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class ConfigCloudinary {

    @Bean
    public Cloudinary cloudinaryConfig(){
        Cloudinary cloudinary = null;
        Map config = new HashMap();
        config.put("cloud_name", "web-english");
        config.put("api_key", "572222323344283");
        config.put("api_secret", "IOIXZ0MHSTu547nvs6nA3FsF4x0");
        config.put("secure", true);
        cloudinary = new Cloudinary(config);
        return cloudinary;
    }

}
