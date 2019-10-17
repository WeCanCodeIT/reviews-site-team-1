const ReviewDomainObject = require("../Model/Review");
const reviewService = require("../services/review-service");
const categoryService = require("../services/category-service");
const tagService = require("../services/tag-service");

module.exports = {
    async newReview(req, res){
        const title = req.body.title;
        const content= req.body.content;
        const rating = req.body.rating;
        
        const categoryId = Number(req.body.category);
        const tagStringId = req.body.tag;
        const tagIds = [];

        tagIds.push(Number(tagStringId));
        const newReview = new ReviewDomainObject(title,content,rating)
        await reviewService.addReview(newReview, tagIds)
        res.redirect("/reviews")
    },

    async getReviews(req, res){
        res.render("reviews", {review: await reviewService.findAll()});
    },

    async getNewReviewForm(req, res){
        res.render("submit-review", {category: await categoryService.findAll(), tag: await tagService.findAll()})
    }
}
