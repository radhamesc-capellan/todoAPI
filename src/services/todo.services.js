const Todos = require("../models/todo.models");

class TodosServices {
  static async create(newTodo) {
    try {
      const todoCreated = await Todos.create(newTodo);
      return todoCreated;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodosServices;
