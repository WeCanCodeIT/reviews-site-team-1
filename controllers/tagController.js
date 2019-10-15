const tagService = require("../services/tag-service")

module.exports = {
    async displayTags (req, res) {
        res.render("tags", {tags: await tagService.findAll()})
            }
        }