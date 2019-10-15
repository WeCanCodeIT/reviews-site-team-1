const Category = require("../utils/category");
const Review = require("../utils/review");


module.exports = {



    // findAll (callback) {
    //     Category.findAll().then(callback)
    // },

    async findAll() {
        return await Category.findAll()
    },

    async findByReview (id) {
      return await Review.findAll({
            where:{categoryId: id}
        })
    },

    async findById (id) {
        return await Category.findByPk(id)
    }

   
    };