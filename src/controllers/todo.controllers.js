const TodosServices = require("../services/todo.services");

const createTodo = async (req, res) => {
  try {
    const newTodo = req.body;
    const result = await TodosServices.create(newTodo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { createTodo };
