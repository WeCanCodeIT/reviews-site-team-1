const Category = require("../utils/category");


module.exports = {



    // findAll (callback) {
    //     Category.findAll().then(callback)
    // },

    async findAll() {
        return await Category.findAll()
    },

    // findById (id, callback) {
    //     Category.findByPk(id).then(callback)
    //     },

    async findById (id) {
        return await Category.findByPk(id)
    }

    };