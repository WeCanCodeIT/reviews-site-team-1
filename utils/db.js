
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'library', // db name
  'root', // db username
  'password', // db password
  { // config object
    dialect: 'mysql', // type of db
    host: 'localhost' // db hosting location
  }
)

module.exports = sequelize