package com.nisum.sprint3project.controller;

import com.nisum.sprint3project.dto.FeedbackDTO;
import com.nisum.sprint3project.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin(origins = "http://localhost:3000")
public class FeedbackController {
    
    @Autowired
    private FeedbackService feedbackService;
    
    @PostMapping("/seller")
    public ResponseEntity<String> submitSellerFeedback(@RequestBody FeedbackDTO feedback) {
        String result = feedbackService.submitSellerFeedback(feedback);
        return ResponseEntity.ok(result);
    }
    
    @PostMapping("/delivery")
    public ResponseEntity<String> submitDeliveryFeedback(@RequestBody FeedbackDTO feedback) {
        String result = feedbackService.submitDeliveryFeedback(feedback);
        return ResponseEntity.ok(result);
    }
    
    @PostMapping("/product")
    public ResponseEntity<String> submitProductReview(@RequestBody FeedbackDTO feedback) {
        String result = feedbackService.submitProductReview(feedback);
        return ResponseEntity.ok(result);
    }
}