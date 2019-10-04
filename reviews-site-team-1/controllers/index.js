exports.index = 
function(req, res, next) {
    res.render('index', { title: 'Red Hawk reviews' });
}