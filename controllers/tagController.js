const tagService = require("../services/tag-service");
const TagDomainObject = require("../Model/Tag");

module.exports = {
    async displayTags (req, res) {
        res.render("tags", {tags: await tagService.findAll()})
    },
        

    async newTag (req, res) {
        const tagTitle = req.body.title;

        const newTag = new TagDomainObject(tagTitle)

        await tagService.addTag(newTag);
        res.redirect("/tags")
    }
}