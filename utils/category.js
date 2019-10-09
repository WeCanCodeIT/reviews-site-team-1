const Sequelize = require('sequelize');
const sequelize = require("./db");

const Category = sequelize.define('category', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    category: {
        type: Sequelize.STRING,
        allowNull: false
    }


  });

  module.exports = Category;