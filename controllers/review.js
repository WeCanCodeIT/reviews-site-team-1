const ReviewDomainObject = require("../Model/Review");
const reviewService = require("../services/review-service");


class ReviewController{

    static newReview(req, res){
        const title = req.body.title;
        const content= req.body.content;
        const category = req.body.category;
        const rating = req.body.rating;
        const tags = req.body.tags;
        
        reviewService.addReview(new ReviewDomainObject(title, content, rating, category, tags), (createdReview) => {
        reviewService.addTags(tags);
        res.redirect("/reviews")}
        )}   

    static getReviews(req, res){
        reviewService.findAll((reviews) => {
        res.render("reviews", { reviews });
        })

    
    };
    static getNewReviewForm(req, res){
            res.render("submit-review")
        }
}

module.exports = ReviewController;
