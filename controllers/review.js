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
        res.redirect("/reviews")}
        )}   

    static getReviews(req, res){
        reviewService.findAll((review) => {
        res.render("reviews", { review });
        })

    
    };
    static getNewReviewForm(req, res){
            res.render("submit-review")
        }
}

module.exports = ReviewController;
