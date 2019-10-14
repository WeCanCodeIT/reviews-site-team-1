const categoryService = require("../services/category-service");



module.exports = {
    async renderAll (req, res) {
        res.render("categories", {category: await categoryService.findAll()})
            }
        }
