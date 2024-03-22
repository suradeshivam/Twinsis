const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const user = require("./routes/userRoutes");
const appointment = require("./routes/appointementRoutes");
const doctor = require("./routes/doctorRoutes");
const cors = require("cors");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://startling-cassata-880770.netlify.app",
      "https://papaya-yeot-1f2bab.netlify.app",
    ],
  })
);

app.get("/", (req, res) => {
  res.send("<h1> Working <h1>");
});

app.get("/data", (req, res) => {
  res.send("<h1> Some Data <h1>");
});

app.use("/api/user", user);
app.use("/api/appointment", appointment);
app.use("/api/doctor", doctor);

app.listen(process.env.PORT, () => {
  console.log(`server is listening on ${process.env.PORT}`);
});
