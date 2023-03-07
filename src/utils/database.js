const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "todo_api",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "dtan1928",
  dialect: "postgres",
});

module.exports = db;
