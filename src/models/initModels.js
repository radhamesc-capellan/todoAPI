const Users = require("./user.models");
const Categories = require("./categoty.models");
const Todos = require("./todo.models");

const initModels = () => {
  Users.hasMany(Todos, { foreignKey: "userId" });
  Todos.belongsTo(Users, { foreignKey: "userId" });

  Categories.hasMany(Todos, { foreignKey: "categoryId" });
  Todos.belongsTo(Categories, { foreignKey: "categoryId" });
};

module.exports = initModels;