const Sequelize = require('sequelize');
const sequelize = require("./db");

// const Tag = require("../utils/review");
// const Category = require("../utils/category");

const TagReview = sequelize.define('user_city');

const Review = sequelize.define('review', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
  });

  module.exports = Review, TagReview;