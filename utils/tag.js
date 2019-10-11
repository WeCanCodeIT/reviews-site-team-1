const Sequelize = require('sequelize');
const sequelize = require("./db");
const Review = require("../utils/review");


const Tags = sequelize.define('usertags',{

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
Review.belongsToMany(Tags, {through: 'tag_review' });
Tags.belongsToMany(Review, {through: 'tag_review'});

module.exports = Tags