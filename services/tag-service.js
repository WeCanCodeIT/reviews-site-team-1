const Tags = require("../utils/tag");

module.exports = {
    async findAll () {

        return await Tags.findAll()
    },

    async findById (id) {
        return await Tags.findByPk(id)
        }
    };
