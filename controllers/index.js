const Review = require("../Model/Review");
const r = require("../utils/review");



class IndexController{
    static index(req, res){
        res.render('index', { 
            title: 'Red Hawk reviews', 
            age: 14});  
    }
    static addReview(req, res){
        const title = req.body.title;
        const content= req.body.content;
        const category = req.body.category;
        const rating = req.body.rating;
        const tags = req.body.tags;
        r.create(new Review(title, content,rating, category, tags));
        res.redirect("/")
            };

    // static getReviews(req, res){
    //     r.findAll().then(result => {
    //       })
    //     res.render("index", { reviews : result});
    // }
    
    
}

module.exports = IndexController;
