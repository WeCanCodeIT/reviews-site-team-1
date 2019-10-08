const Category = require("../Model/Category");
const category = require("../utils/category");

class CategoryController{
    static  index(req, res){
        res.render('index', { 
            title: 'Red Hawk reviews', 
            });
    }
}


module.exports = CategoryController;