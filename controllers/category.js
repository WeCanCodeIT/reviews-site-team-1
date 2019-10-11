const Category = require("../Model/Category");
const category = require("../utils/category");

class CategoryController{
    static  index(req, res){
        res.render('view', { 
            title: '', 
            });

    categoryService.addCategory(new CategoryDomainObject(id, category), (createdCategory) => {
        res.redirect("/view")}
        )} 

    static post(req, res){
        const category0 = req.body.category;
        const variable = new Category(category0);
        category.create(variable);
        res.redirect('/tables');
        // static getCategory(req, res){
        //   categoryService.findAll((categories) => {
        //   res.render("view", { categories });
    }
}


module.exports = CategoryController;