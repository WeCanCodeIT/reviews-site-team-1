const categoryService = require("../services/category-service");
const reviewService = require("../services/review-service");

module.exports = {
    async renderAll (req, res) {
        res.render("categories", {category: await categoryService.findAll()})
            },
    
     async reviewCategory (req, res) {
            const categoryId = Number(req.params.id);
            const category = await categoryService.findCategory(categoryId);
            category.reviews = await category.getReviews();
            res.render("categoryReview", {category})          
        }
    }
