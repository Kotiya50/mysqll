const express = require("express");

const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mySqlPool = require("./config/db");

dotenv.config();
const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/students", require("./router/stRoutes"));

app.get("/test", (req, res) => {
  res.status(200).send("<h1>welcome Node js Mysql </h1>");
});

const PORT = process.env.PORT || 8000;

mySqlPool
  .query("SELECT 1")
  .then(() => {
    console.log("MySql DB Connected".bgCyan.white);
    app.listen(PORT, () => {
      console.log(`Server Running On Port ${process.env.PORT}`.bgRed.white);
    });
  })
  .catch((error) => {
    console.log(error);
  });

