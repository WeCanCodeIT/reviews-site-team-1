const Review = require("../utils/review");


module.exports = {

    async findAll () {
      return await Review.findAll()
    }, 
    // findById (id, callback) {
    //   Review.findByPk(id).then(callback)
    // },
    async addReview(review, tagIds) {
      const newReview = await Review.create(review)
      newReview.addTag(tagIds)
      
    }
  };