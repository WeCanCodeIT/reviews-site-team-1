const Review = require("../utils/review");
const TagReview = require("../utils/tag_review");
const TagReviewDomainObject = require("../Model/TagReview")
module.exports = {
    async findAll () {
      return await Review.findAll()
    }, 
    // findById (id, callback) {
    //   Review.findByPk(id).then(callback)
    // },
    async addReview (review, tagIds) {
      await Review.create(review)
      await tagIds.array.forEach(tagId => {
        TagReview.create({reviewId: review.id, tagId: tagId});
      });


    }
  };