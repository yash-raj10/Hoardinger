const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User.js");
const bcrypt = require("bcryptjs");

// middlewares
const secret = bcrypt.genSaltSync(10);
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

//End points
app.get("/test", (req, res) => {
  res.json("testing");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, secret),
    });

    res.json(userDoc);
  } catch (error) {
    res.json(422).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userDoc = await User.findOne({
    email: email,
  });
  if (userDoc) {
    const passIsCorrect = bcrypt.compareSync(password, userDoc.password);
    if (passIsCorrect) {
      res.json("pass is correct");
    } else {
      res.status(422).json("pass is not correct");
    }
  } else {
    res.json("user not found");
  }
});

// listen
console.log("hell  world");
app.listen(5000);
