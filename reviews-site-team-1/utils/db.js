
const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'library', // replace this with whatever your database is actually named
  password: '1234' // replace this with the password to your database (hopefully it isn't 'password')
})

module.exports = pool.promise()