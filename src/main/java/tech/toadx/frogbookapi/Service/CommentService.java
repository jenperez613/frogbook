package tech.toadx.frogbookapi.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.toadx.frogbookapi.Entity.Comment;
import tech.toadx.frogbookapi.Entity.Post;
import tech.toadx.frogbookapi.Repository.CommentRepository;


@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    UserService userService;

    public Comment saveComment(Comment comment) {
        Date date=new Date();
        long time=date.getTime();
        Timestamp dateTime=new Timestamp(time);

        comment.setCommentID(UUID.randomUUID());
        comment.setUploadTime(dateTime);
        return commentRepository.save(comment);
    }

    public ArrayList<Comment> getAllComment(UUID postID){
        return commentRepository.findAllByPostID(postID);
    }
//Using postId bc there can be hundreds+ comments...

}