const Category = require("../utils/category");


module.exports = {

    findAll (callback) {
        Category.findAll().then(callback)
    },

    findById (id, callback) {
        Category.findByPk(id).then(callback)
        }
    };