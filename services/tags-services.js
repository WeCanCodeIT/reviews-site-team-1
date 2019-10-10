const Tags = require("../utils/tags");

module.exports = {
    findAll (callback) {
        Tags.findAll().then(callback);
      },
      findById (id, callback) {
        Tags.findByPk(id).then(callback)
      },
      save (Tags, callback) {
        Tags.create(student).then(callback)
      }
    };
}
