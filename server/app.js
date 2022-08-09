const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const userRoute = require('./Routes/user')

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://Yann:123@cluster0.3x5y5.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use('/api',userRoute)

module.exports = app;
