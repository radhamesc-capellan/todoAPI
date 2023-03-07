const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/user.routes");
const todoRoutes = require("./routes/todo.routes");

initModels();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 5500;

db.authenticate()
  .then(() => {
    console.log("Connect DB");
  })
  .catch((error) => console.log(error));

db.sync({ alter: true })
  .then(() => console.log("Sync DB"))
  .catch((error) => console.log(error));

app.use(userRoutes);
app.use(todoRoutes);

app.get("/", (req, res) => {
  res.send("TODO API");
});

app.listen(PORT, () => {
  console.log(`Run Server in Port: ${PORT}`);
});
