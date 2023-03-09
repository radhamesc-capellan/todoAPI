const { Router } = require("express");
const {
  getUserTodosWithCategories,
  createTodo,
  updteStatusTodo,
  deleteTodo,
} = require("../controllers/todo.controllers");

const router = Router();

router.get("/api/v1/todos/:userId/categories", getUserTodosWithCategories);
router.post("/api/v1/todos", createTodo);
router.put("/api/v1/todos/:id", updteStatusTodo);
router.delete("/api/v1/todos/:id", deleteTodo);

module.exports = router;
