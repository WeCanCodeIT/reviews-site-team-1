const Review = require("../utils/review");

module.exports = {
    findAll (callback) {
      Review.findAll().then(callback);
    },

    // async findAll () {
    //   return await Review.findAll()

    // findById (id, callback) {
    //   Review.findByPk(id).then(callback)
    // },
    
    addReview (review, callback) {
      Review.create(review).then(callback)
    }
  };