const  express = require('express');
const router = express.Router();
const TagController = require("../controllers/tagController");


router.get("/", TagController.displayTags);







module.exports = router;