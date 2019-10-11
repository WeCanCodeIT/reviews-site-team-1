const categoryService = require("../services/category-service");

class CategoryController{
    static  index(req, res){
        res.render('view', { 
            title: '', 
            });
        }

    static renderAll (req, res) {
        categoryService.findAll(categories => {
                res.render("categories", {categories})
            })
        }
    };

module.exports = CategoryController;