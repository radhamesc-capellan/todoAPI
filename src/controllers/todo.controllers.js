const TodosServices = require("../services/todo.services");

const getUserTodosWithCategories = async (req, res) => {
  try {
    const { userId } = req.params;
    const userTodosWithCategories = await TodosServices.userTodosWithCategories(
      userId
    );
    res.json(userTodosWithCategories);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createTodo = async (req, res) => {
  try {
    const newTodo = req.body;
    const result = await TodosServices.create(newTodo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await TodosServices.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getUserTodosWithCategories,
  createTodo,
  deleteTodo,
};
