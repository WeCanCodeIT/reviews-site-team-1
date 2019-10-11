const Category = require("../utils/category");

module.exports = {
    findAll (callback) {
        Category.findAll().then(callback);
    },
    post (category, callback) {
        Category.create(category).then(callback)
        }
    };