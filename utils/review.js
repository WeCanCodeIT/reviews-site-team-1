const Sequelize = require('sequelize');
const sequelize = require("./db");
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
      },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tags: {
        type: Sequelize.STRING,
        allowNull: false
    }

  });

  module.exports = Review;