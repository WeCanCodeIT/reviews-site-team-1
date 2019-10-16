const Sequelize = require('sequelize');
const sequelize = require("./db");
const Review = require("./review");

const Category = sequelize.define('categories', {
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

// Category.belongsToMany(Review, {through: Review});
// Category.belongsToMany(Review, {through: 'category_review'})
Review.belongsTo(Category, {through:'Category'});
module.exports = Category;