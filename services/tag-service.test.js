const tagService = require('./tag-service')
const Tags = require('../utils/tag')

describe("tag-service", () => {
    describe("findAll", () => {
      test("Should call findAll from sequelize model", () => {
        Tags.findAll = jest.fn(() => [])
  
        tagService.findAll()
  
        expect(Tags.findAll).toHaveBeenCalledTimes(1)
      })
    })
  })