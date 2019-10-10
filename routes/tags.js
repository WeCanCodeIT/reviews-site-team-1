var express = require('express');
var router = express.Router();

const TagsController = require('../controllers/tags');

router.get('/', TagsController.getTags )
