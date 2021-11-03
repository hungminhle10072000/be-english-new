package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.dto.MailDto;
import org.springframework.stereotype.Service;

@Service("mailer")
public interface  MailService {
    void sendEmail(MailDto mail);
}
