const Category = require("../Model/Category");
const category = require("../utils/category");

class CategoryController{
    static  index(req, res){
        res.render('view', { 
            title: '', 
            });
    }


    static post(req, res){
        // res.render('view')
        const category0 = req.body.category;
        const variable = new Category(category0);
        category.create(variable);
        res.redirect('/tables');
    }
}


module.exports = CategoryController;