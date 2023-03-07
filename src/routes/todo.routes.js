const { Router } = require("express");
const { createTodo } = require("../controllers/todo.controllers");

const router = Router();

router.post("/api/v1/todos", createTodo);

module.exports = router;
