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
<<<<<<< HEAD
Category.hasMany(Review)
Review.belongsTo(Category);

=======
// Category.belongsToMany(Review, {through: 'category_review'})
Review.belongsTo(Category, {through:'Category'});
>>>>>>> 0a37abd9ac8cb35e188097934af61ba8a89f4f95
module.exports = Category;