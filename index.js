const express = require("express");
const app = express();

const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

//routes
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect mongoDB " + err);
  });

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(8800, () => {
  console.log("Backend server is running...");
});
