package com.sebastian.primerapp.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/email")
public class emailController {

    // @GetMapping
    // public String email(@RequestParam("email") String email) {
    // return String.format("Hola %s!", email);
    // }

    @GetMapping
    public String operarGet(@RequestParam("num1") int num1, @RequestParam("num2") int num2,
            @RequestParam("operation") String operation) {

        int result = 0;

        switch (operation) {
            case "suma":
                result = num1 + num2;
                break;
            case "resta":
                result = num1 - num2;
                break;
            case "mult":
                result = num1 * num2;
                break;
            case "div":
                result = num1 / num2;
                break;

            default:
                break;
        }
        return String.format("%,d", result);
    }

    @PostMapping
    public String operarPost() {
        return null;
    }

}
