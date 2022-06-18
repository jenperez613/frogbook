package tech.toadx.frogbookapi.Repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.cassandra.repository.AllowFiltering;
import org.springframework.data.cassandra.repository.CassandraRepository;
import tech.toadx.frogbookapi.Entity.Comment;


public interface CommentRepository extends CassandraRepository<Comment, UUID>{

    Comment save(Comment comment);

    @AllowFiltering
    ArrayList<Comment> findAllByPostID(UUID postID);
    //void deleteById(UUID commentID);
}