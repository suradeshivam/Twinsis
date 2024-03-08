const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const user = require("./routes/userRoutes");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use("/user", user);

app.listen(process.env.PORT, () => {
  console.log(`server is listening on ${process.env.PORT}`);
});
