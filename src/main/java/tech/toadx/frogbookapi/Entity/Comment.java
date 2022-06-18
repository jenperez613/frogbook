package tech.toadx.frogbookapi.Entity;

import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.sql.Timestamp;
import java.util.UUID;

@Table("Comment")
public class Comment {

    @PrimaryKey
    private UUID commentID;

    private UUID postID;
    private UUID userID;

    private String userImage;
    private String userName;
    private String text;
    private Timestamp uploadTime;


    public Comment(UUID commentID, UUID postID, UUID userID, String userImage, String userName, String text, Timestamp uploadTime) {
        this.commentID = commentID;
        this.postID = postID;
        this.userID = userID;
        this.userImage = userImage;
        this.userName = userName;
        this.text = text;
        this.uploadTime = uploadTime;
    }

    public UUID getCommentID() {
        return commentID;
    }

    public void setCommentID(UUID commentID) {
        this.commentID = commentID;
    }

    public UUID getPostID() {
        return postID;
    }

    public void setPostID(UUID postID) {
        this.postID = postID;
    }

    public UUID getUserID() {
        return userID;
    }

    public void setUserID(UUID userID) {
        this.userID = userID;
    }

    public String getUserImage() {
        return userImage;
    }

    public void setUserImage(String userImage) {
        this.userImage = userImage;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Timestamp getUploadTime() {
        return uploadTime;
    }

    public void setUploadTime(Timestamp uploadTime) {
        this.uploadTime = uploadTime;
    }
}

