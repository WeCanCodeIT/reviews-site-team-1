const ReviewService = require('./review-service')
const Review = require('../utils/review')

describe("review-service", () => {
    describe("findAll", () => {
      test("Should call findAll from sequelize model", () => {
        Review.findAll = jest.fn(() => [])
  
        ReviewService.findAll()
  
        expect(Review.findAll).toHaveBeenCalledTimes(1)
      })
    })
  })