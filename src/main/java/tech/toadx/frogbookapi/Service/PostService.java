package tech.toadx.frogbookapi.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.toadx.frogbookapi.Entity.Post;
import tech.toadx.frogbookapi.Repository.PostRepository;

import java.sql.Timestamp;
import java.util.Date;
import java.util.ArrayList;
import java.util.UUID;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public ArrayList<Post> submitPostToDB(Post postData){

        Date date = new Date();
        long time =date.getTime();
        Timestamp dateTime = new Timestamp(time);

        postData.setPostID(UUID.randomUUID());
        postData.setLikes(0);
        postData.setDateTime(dateTime);

        postRepository.save(postData);
        ArrayList<Post> result=retrievePostFromDB();
        return result;
    }
    public ArrayList<Post> retrievePostFromDB(){
        ArrayList<Post> result= postRepository.findAll();
        return result;
    }
    public ArrayList<Post> deletePostFromDB(UUID postID){
       postRepository.deleteById(postID);
        ArrayList<Post> result=retrievePostFromDB();
        return result;
    }

}
