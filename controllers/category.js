const categoryService = require("../services/category-service");
const reviewService = require("../services/review-service");

module.exports = {
    async renderAll (req, res) {
        res.render("categories", {category: await categoryService.findAll()})
            }
    ,
     async reviewCateogy (req, res) {
            const categoryId = Number(req.params.id);
            const categoryReview = await categoryService.findSome(categoryId);
            res.render("categoryReview", {categoryReview});
          
     },
    }
    
