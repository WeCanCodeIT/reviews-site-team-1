const Tag = require("../utils/tag");

module.exports = {
    async findAll () {
       return await Tag.findAll()
    },
  
    async findById (id) {
        await Tag.findByPk(id)
        }
    };
