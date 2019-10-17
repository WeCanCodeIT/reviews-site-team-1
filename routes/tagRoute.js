const  express = require('express');
const router = express.Router();

const TagController = require("../controllers/tagController");


router.get("/", TagController.displayTags);

router.post("/", TagController.newTag);

router.get("/:id", TagController.reviewTag);


module.exports = router;