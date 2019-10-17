const ReviewDomainObject = require("../Model/Review");
const reviewService = require("../services/review-service");
const categoryService = require("../services/category-service");
const tagService = require("../services/tag-service");

 

module.exports = {
    async newReview(req, res){
        const title = req.body.title;
        const content= req.body.content;
        const rating = req.body.rating;
        
<<<<<<< HEAD
        const categoryId = Number(req.body.category);
        const tagStringId = req.body.tag;
        const tagIds = [];
        tagIds.push(Number(tagStringId));
=======
        let tagStringId ;

            if(req.body.tag === undefined){
                tagStringId = [ ]
            } else if (typeof req.body.tag === 'string') {
                tagStringId = [req.body.tag]
            } else {
                tagStringId = [...req.body.tag ]
            };

        const tagIds = [];
        tagStringId.forEach(tagId => {
            tagIds.push(Number(tagId))
        })
 
>>>>>>> 0a37abd9ac8cb35e188097934af61ba8a89f4f95
        const newReview = new ReviewDomainObject(title,content,rating)
        await reviewService.addReview(newReview, tagIds)
        res.redirect("/reviews")
    },
    async getReviews(req, res){
        res.render("reviews", { review: await reviewService.findAll()});
    },
    async getNewReviewForm(req, res){
        res.render("submit-review", {category: await categoryService.findAll(), tag: await tagService.findAll()})
    }
}
