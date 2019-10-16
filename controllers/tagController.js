const tagService = require("../services/tag-service")

module.exports = {
    async displayTags (req, res) {
        res.render("tags", {tags: await tagService.findAll()})
            },
    
    async reviewTag (req, res) {
        const tagId = Number(req.params.id);
       res.render("tagReview", {tag:await tagService.findSome(tagId)})
    }

        
        }