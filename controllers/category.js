const categoryService = require("../services/category-service");


class CategoryController{
    static  index(req, res){
        res.render('view', { 
            title: '', 
            });
        };

    static async renderAll (req, res) {
        res.render("categories", {categories: await categoryService.findAll()})
            }
        };

module.exports = CategoryController;