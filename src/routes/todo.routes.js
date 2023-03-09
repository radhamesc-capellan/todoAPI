const { Router } = require("express");
const {
  getUserTodosWithCategories,
  createTodo,
  deleteTodo,
} = require("../controllers/todo.controllers");

const router = Router();

router.get("/api/v1/todos/:userId/categories", getUserTodosWithCategories);
router.post("/api/v1/todos", createTodo);
router.delete("/api/v1/todos/:id", deleteTodo);

module.exports = router;
