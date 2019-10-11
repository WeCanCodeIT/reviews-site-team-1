const Tags = require("../utils/tag");

module.exports = {
    findAll (callback) {
        Tags.findAll().then(callback)
    },

    findById (id, callback) {
        Tags.findByPk(id).then(callback)
        }
    };
