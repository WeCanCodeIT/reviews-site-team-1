const Category = require("../utils/category");


module.exports = {

    async findAll() {
        return await Category.findAll()
    },        

    async findById (id) {
        await Category.findByPk(id)
        }
    };