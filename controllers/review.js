const ReviewDomainObject = require("../Model/Review");
const reviewService = require("../services/review-service");
const categoryService = require("../services/category-service");
const tagService = require("../services/tag-service");

class ReviewController{

    static async newReview(req, res){
        const title = req.body.title;
        const content= req.body.content;
        const rating = req.body.rating;
        const tagIds = req.body.tag;
        const categoryId = Number(req.body.category);
        
        const newReview = new ReviewDomainObject(title,content,rating)
    
        newReview.categoryId = categoryId;
        console.log(newReview)
        console.log(tagIds);

        await reviewService.addReview(newReview, tagIds)
        

        res.redirect("/reviews")}
         

    static async getReviews(req, res){
        res.render("reviews", { review: await reviewService.findAll()});
        };
  
    static async getNewReviewForm(req, res){
            res.render("submit-review", {category: await categoryService.findAll(), tag: await tagService.findAll()})
        };
};   

module.exports = ReviewController;
