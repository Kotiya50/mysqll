const mysql = require("mysql2/promise");

const mySqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Password@123",
  database: "user_db",
});

module.exports = mySqlPool;
