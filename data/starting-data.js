const Category = require('../utils/category');
const Tag = require('../utils/tag');


const StartingCategories = [
    {categoryTitle : "Tattoos"},
    {categoryTitle : "Hair"},
    {categoryTitle : "Clothes"}
    ]

const StartingTags = [
    {tagTitle : "Funny"},
    {tagTitle : "Sad"},
    {tagTitle : "Beautiful"},
    {tagTitle : "Ugly"}
]

const generateStartingData = () => {
    Category.bulkCreate(StartingCategories, {
      fields: ["categoryTitle"],
      updateOnDuplicate: ["categoryTitle"]
    })
    Tag.bulkCreate(StartingTags, {
      fields: ["tagTitle"],
      updateOnDuplicate: ["tagTitle"]
    })
};

module.exports = generateStartingData;