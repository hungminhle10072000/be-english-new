package com.hungnghia.springbootbackend.controller;

import com.hungnghia.springbootbackend.dto.StatisticalDto;
import com.hungnghia.springbootbackend.service.StatisticalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/statistical")
public class StatisticalController {
  @Autowired
  private StatisticalService statisticalService;

  @PostMapping("/add")
  public StatisticalDto addStatistical(@RequestBody StatisticalDto statisticalDto) {
    System.out.println("Add Statistical");
    return statisticalService.addStatistical(statisticalDto);
  }
}
