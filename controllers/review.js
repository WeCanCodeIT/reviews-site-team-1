const ReviewDomainObject = require("../Model/Review");
const reviewService = require("../services/review-service");
const Tags = require("../utils/tags");

class ReviewController{

    static newReview(req, res){
        const title = req.body.title;
        const content= req.body.content;
        const category = req.body.category;
        const rating = req.body.rating;
        const tags = req.body.tags;
        
        reviewService.addReview(new ReviewDomainObject(title, content, rating, category, tags), (createdReview) => {
        res.redirect("/reviews")}
        )}   

    static getReviews(req, res){
        reviewService.findAll((reviews) => {
        res.render("reviews", { reviews });
        })
    };
}

module.exports = ReviewController;
