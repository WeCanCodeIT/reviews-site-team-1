const Category = require("../Model/Category");
const category = require("../utils/category");

class CategoryController{
    static  index(req, res){
        res.render('index', { 
            title: 'Red Hawk reviews', 
            age: 14});
    }
}


module.exports = CategoryController;