const Sequelize = require('sequelize');
const sequelize = require("./db");
const Review = require("./review");

const Category = sequelize.define('categoryTypes', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    categoryTitle: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Category.belongsToMany(Review, {through: 'category_reviews'});
Review.belongsTo(Category, {through:'category_reviews'});

module.exports = Category;