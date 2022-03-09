// const express = require("express") // ES5
import express from "express"; //ES6
import mongoose from "mongoose";
import wilderController from "./controllers/wilder"
import {wilderValidation} from "./validations"
import dotenv from "dotenv";
import sportsManController from "./controllers/sportsman"
import {sportsManValidation} from "./validations"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;
mongoose
  .connect(
    process.env.MONGO_URI,
     {
      autoIndex: true,
    }
  )
  .then(() => console.log("Connecté à la base de donnée"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//   // /api/wilder/create
// app.post("/api/wilder/create", (req, res) => {
//   //req
//   //routes ou endpoints
//   console.log("Créer un Wilder!");
//   wilderController.create(req,res)

// });
// /api/wilder/create

// app.get("/", (req, res)=>{
//   console.log("we are connected");
//   res.status(200).json("we are good")
// })
 
app.post(
  "/api/wilder/create",
  wilderValidation.create,
  wilderController.create
);

app.post("/api/sportsman/create", sportsManValidation.create, sportsManController.create)

app.listen(PORT, () => console.log("Serveur lancé sur le port 3000"));