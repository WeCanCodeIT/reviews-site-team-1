const Review = require("../Model/Review");
const r = require("../utils/review");


class IndexController{
    static index(req, res){
        res.render('index', { 
            title: 'Red Hawk reviews', 
            });  
    } 
}

module.exports = IndexController;

//This probably isn't necessary...