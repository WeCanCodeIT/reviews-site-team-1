const CategoryService = require('./category-service')
const Category = require('../utils/category')

describe("category-service", () => {
    describe("findAll", () => {
      test("Should call findAll from sequelize model", () => {
        Category.findAll = jest.fn(() => [])
  
        CategoryService.findAll()
  
        expect(Category.findAll).toHaveBeenCalledTimes(1)
      })
    })
  })