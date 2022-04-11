import express from "express";
import sportsManController from "../controllers/sportsman"
import {sportsManValidation, wilderValidation} from "../validations"
import getSpecificWilder from "../controllers/getSpecificWilder";
import getAllUserSports from "../controllers/getAllUserSports";
import wilderController from "../controllers/wilder";


const router = express.Router();

// app.get("/", (req, res)=>{
//   console.log("we are connected");
//   res.status(200).json("we are good")
// })

router.post(
    "/wilder/create",
    wilderValidation.create,
    wilderController.create
);

router.post("/sportsman/create", sportsManValidation.create, sportsManController.create)

router.get("/wilders", getSpecificWilder.getAll)
router.get("/wilder/name", getSpecificWilder.getOne)
router.get("/sports/specific", getAllUserSports.getMany)
router.delete("/wilder/delete/:_id", getSpecificWilder.delete)
router.put("/wilder/update/:_id", getSpecificWilder.update)
router.get("/wilder/find/:_id", getSpecificWilder.find)


export default router;