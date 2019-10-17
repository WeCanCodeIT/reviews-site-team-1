const Category = require("../utils/category");
const Review = require("../utils/review");

module.exports = {

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