class Category{
    static trial(req, res, next) {
        res.render('category', { title: 'category', name: 'soccer'});
    }
}


module.exports = Category;