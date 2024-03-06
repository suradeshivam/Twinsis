const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server is listening on ${process.env.PORT}`);
});
