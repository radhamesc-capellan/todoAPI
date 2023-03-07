const Users = require("./user.models");
const Categories = require("./categoty.models");
const Todos = require("./todo.models");

const initModels = () => {
  Users.hasMany(Todos, { foreignKey: "user_id" });
  Todos.belongsTo(Users, { foreignKey: "user_id" });

  Categories.hasMany(Todos, { foreignKey: "category_id" });
  Todos.belongsTo(Categories, { foreignKey: "category_id" });
};

module.exports = initModels;