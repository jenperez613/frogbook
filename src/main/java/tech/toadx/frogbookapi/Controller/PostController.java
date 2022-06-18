package tech.toadx.frogbookapi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.toadx.frogbookapi.Entity.Post;
import tech.toadx.frogbookapi.Service.PostService;

import java.util.ArrayList;
import java.util.UUID;

@RestController
@RequestMapping("/api/postService")
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping("/save")
    public ArrayList<Post> submitPost(@RequestBody Post body) {
        ArrayList<Post> result=postService.submitPostToDB(body);
        return result;
    }

    @GetMapping("/getPost")
    public ArrayList<Post> retrieveAllPost() {
        ArrayList<Post> result=postService.retrievePostFromDB();
        return result;
    }

    @DeleteMapping("/delete/{postId}")
    public ArrayList<Post> deleteParticularPost(@PathVariable("postId") UUID postID) {
        ArrayList<Post> result=postService.deletePostFromDB(postID);
        return result;

    }
}
