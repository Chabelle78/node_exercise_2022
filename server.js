// const express = require("express") // ES5
import express from "express"; //ES6
import mongoose from "mongoose";
import dotenv from "dotenv";
import wilderRouter from "./routes/wilder"

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

app.use("/api", wilderRouter)

app.use((req, res)=>{
  res.status(404).send("route qui nexiste pas")
})

app.listen(PORT, () => console.log("Serveur lancé sur le port 3000"));