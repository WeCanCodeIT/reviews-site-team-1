const Category = require("../utils/category");


module.exports = {



    async findAll() {
        return await Category.findAll()
    },

    async findSome(categoryId) {
        const selectedCategory = await Category.findAll(categoryId)
        Category.getReview(categoryId)
        },

    async findById (id) {
        return await Category.findByPk(id)
    }

    };