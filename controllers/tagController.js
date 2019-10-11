const tagService = require("../services/tag-service")
class TagController{

    static displayTags(req, res){
        tagService.findAll(tags => {
            res.render("tags", {tags})
                })
            
    }
}

module.exports = TagController