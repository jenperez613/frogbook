package tech.toadx.frogbookapi.Controller;

import java.util.ArrayList;
import java.util.UUID;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.toadx.frogbookapi.Entity.User;
import tech.toadx.frogbookapi.Service.UserService;


@CrossOrigin
@RestController
@RequestMapping("/api/userService")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/save")
    public User saveUserMetaData(@RequestBody User user) {
        return userService.submitMetaDataOfUser(user);
    }

    @GetMapping("/getUserDetails")
    public ArrayList<User> getAllUserDetails() {
        return userService.retrieveAllUserDetails();
    }

    @GetMapping("/getAllUsers/{userID}")
    public User getUserDetail(@PathVariable("userID") UUID userID) {
        return userService.getUserData(userID);
    }

}
