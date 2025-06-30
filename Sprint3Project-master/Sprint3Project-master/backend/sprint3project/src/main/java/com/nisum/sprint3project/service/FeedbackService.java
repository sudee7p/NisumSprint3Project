package com.nisum.sprint3project.service;

import com.nisum.sprint3project.dto.FeedbackDTO;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService {
    
    public String submitSellerFeedback(FeedbackDTO feedback) {
        // In real implementation, save to database
        return feedback.getRating() + " star rating submitted for Seller Feedback!";
    }
    
    public String submitDeliveryFeedback(FeedbackDTO feedback) {
        // In real implementation, save to database
        return feedback.getRating() + " star rating submitted for Delivery Feedback!";
    }
    
    public String submitProductReview(FeedbackDTO feedback) {
        // In real implementation, save to database
        return feedback.getRating() + " star rating submitted for Product Review!";
    }
}