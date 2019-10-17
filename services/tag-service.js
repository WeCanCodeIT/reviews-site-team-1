const Tags = require("../utils/tag");

module.exports = {
    async findAll () {
        return await Tags.findAll()
    },

    async findById (id) {
        return await Tags.findByPk(id)
    },

    async addTag (tag) {
        await Tags.create(tag);
    },

    async findSome(tagId){
        const tagToGet = await Tags.findByPk(tagId);
        return tagToGet.getReviews();
    }
};



