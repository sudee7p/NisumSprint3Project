package com.nisum.sprint3project.dto;

public class FeedbackDTO {
    private Integer orderId;
    private String type;
    private Integer rating;
    private String comment;
    
    // Constructors
    public FeedbackDTO() {}
    
    public FeedbackDTO(Integer orderId, String type, Integer rating) {
        this.orderId = orderId;
        this.type = type;
        this.rating = rating;
    }
    
    // Getters and Setters
    public Integer getOrderId() { return orderId; }
    public void setOrderId(Integer orderId) { this.orderId = orderId; }
    
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    
    public Integer getRating() { return rating; }
    public void setRating(Integer rating) { this.rating = rating; }
    
    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }
}