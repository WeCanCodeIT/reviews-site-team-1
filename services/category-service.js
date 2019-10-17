const Category = require("../utils/category");


module.exports = {

    async addCategory(category) {
        return await Category.create(category)
    },

    async findAll() {
        return await Category.findAll()
    },

    async findCategory (categoryId){
        const categoryToGet = await Category.findByPk(categoryId)
        return categoryToGet;
    },

    async findById (id) {
        return await Category.findByPk(id)
    }

    };