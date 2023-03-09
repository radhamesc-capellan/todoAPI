const Todos = require("../models/todo.models");
const Users = require("../models/user.models");
const Categories = require("../models/category.models");

class TodosServices {
  static async userTodosWithCategories(userId) {
    try {
      const result = await Todos.findByPk(userId, {
        attributes: {
          exclude: ["id", "userId", "categoryId", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: Users,
            attributes: ["username"],
          },
          {
            model: Categories,
            attributes: ["name"],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newTodo) {
    try {
      const todoCreated = await Todos.create(newTodo);
      return todoCreated;
    } catch (error) {
      throw error;
    }
  }

  static async updateStatus(newData, id) {
    try {
      const todoStatusUpdate = await Todos.updateStatus(newData, {
        where: { id },
      });
      return todoStatusUpdate;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = Todos.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodosServices;
