require("dotenv").config();
const express = require("express");
const connectMongo = require("./connections");

const workoutRoutes = require("./routes/workouts");
const middleWares = require("./middlewares");

// express app
const app = express();

app.use(express.json());
app.use(middleWares.log);
app.use("/workouts", workoutRoutes);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("err");
  } else {
    console.log("listning");
  }
});

connectMongo.connect();
