package tech.toadx.frogbookapi.Entity;


import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;


import java.sql.Date;
import java.sql.Timestamp;
import java.util.UUID;

@Table
public class Post {

    @PrimaryKey
    private UUID postID;

    private UUID userID;
    private String userName;
    private String imageURL;

    private String text;
    private String postImgURL;

    private int likes;


    private String comments;
    private String comment;
    private String image;

    private Date commentAt;
    private UUID commentBy;
    private String background;
    private Timestamp dateTime;

    public Post(){
        super();
    }

    public Post(UUID postID, UUID userID, String userName, String imageURL, String text, String postImgURL, int likes, String comments, String comment, String image, Date commentAt, UUID commentBy, String background, Timestamp dateTime) {
        this.postID = postID;
        this.userID = userID;
        this.userName = userName;
        this.imageURL = imageURL;
        this.text = text;
        this.postImgURL = postImgURL;
        this.likes = likes;

        this.comments = comments;
        this.comment = comment;
        this.image = image;
        this.commentAt = commentAt;
        this.commentBy = commentBy;
        this.background = background;
        this.dateTime = dateTime;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getPostImgURL() {
        return postImgURL;
    }

    public void setPostImgURL(String postImgURL) {
        this.postImgURL = postImgURL;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Date getCommentAt() {
        return commentAt;
    }

    public void setCommentAt(Date commentAt) {
        this.commentAt = commentAt;
    }

    public UUID getCommentBy() {
        return commentBy;
    }

    public void setCommentBy(UUID commentBy) {
        this.commentBy = commentBy;
    }

    public String getBackground() {
        return background;
    }

    public void setBackground(String background) {
        this.background = background;
    }

    public Timestamp getDateTime() {
        return dateTime;
    }

    public void setDateTime(Timestamp dateTime) {
        this.dateTime = dateTime;
    }
}
