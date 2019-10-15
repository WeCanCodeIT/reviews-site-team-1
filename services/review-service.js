const Review = require("../utils/review");
const Tag = require("../utils/tag");


module.exports = {

    async findAll () {
      return await Review.findAll()
    }, 
    // findById (id, callback) {
    //   Review.findByPk(id).then(callback)
    // },
    async addReview (reviewObject,tags) {
      const newReviews = await Review.create(reviewObject);
     tags.forEach(tag => {
       newReviews.addTag(tag)
     });
    }
   
  };