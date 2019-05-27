package bsu.task9.logic;

import org.json.simple.JSONObject;

import java.util.*;

public class Post {
    private String id;
    private String description;
    private Date createdAt;
    private String author;
    private String photoLink;

    public Post(String id, String description, String user, String photoLink, Date date) {
        this.id = id;
        this.description = description;
        this.createdAt = date;
        this.author = user;
        this.photoLink = photoLink;
    }

    public String getUser() {
        return author;
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setUser(String user) {
        this.author = user;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDate(Date date) {
        this.createdAt = date;
    }

    public Date getDate() {
        return createdAt;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    @Override
    public String toString() {
        JSONObject str = new JSONObject();
        str.put("id", id);
        str.put("description", description);
        str.put("createdAt", createdAt.toGMTString());
        str.put("author", author);
        str.put("photoLink", photoLink);
        return str.toString();
    }
}