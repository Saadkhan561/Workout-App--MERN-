require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

// CREATING EXPRESS APP
const app = express();

// MIDDLEWARE
// app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// ROUTES
app.use("/api/workouts", workoutRoutes);

// CONNECTING DATABASE
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // LISTEN APP
    app.listen(process.env.PORT, () => {
      console.log("Listening to port & connected to database", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
