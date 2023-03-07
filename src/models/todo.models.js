const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Todos = db.define("todos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  categotyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id",
  },
});

module.exports = Todos;
