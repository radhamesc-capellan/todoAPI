const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const initModels = require("./models/initModels");

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

db.sync({ force: true })
  .then(() => console.log("Sync DB"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("TODO API");
});

app.listen(PORT, () => {
  console.log(`Run Server in Port: ${PORT}`);
});
