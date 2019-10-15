const Sequelize = require('sequelize');
const sequelize = require("./db");
const Review = require("../utils/review");


const Tag = sequelize.define('tag',{

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    
      tagTitle: {
          type: Sequelize.STRING,
          allowNull: false,
        }, 



})
Review.belongsToMany(Tag, {through: 'tag_reviews', foreignKey: 'id'});
Tag.belongsToMany(Review, {through: 'tag_reviews', foreignKey: 'id' });

module.exports = Tag;