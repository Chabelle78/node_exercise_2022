//Create, Read, Update, Delete
import WilderModel from "../models/Wilder";
import { verifUser } from "../utilities/tools";
import {validationResult} from 'express-validator'
import { NextFunction, Request, Response } from "express";


// const methods = {
export default {
  create: (req:Request, res:Response, next:NextFunction) => { //post
    const {
      name,
      city,
      description,
      skills
    } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: verifUser(errors)});
    }
   
-
    WilderModel.init().then(() => {
      const wilder = new WilderModel({
        name: name,
        city: city,
        description: description,
        skills: skills,
      });

      wilder
        .save()
        .then((result) => {
          res.json({
            success: true,
            result
          })
        })
        .catch((err) => {
          res.status(400).json({
            succes: false,
            result: verifUser(err)
          })
        });
    });
  }
}

// export default methods;

//Create, Read, Update, Delete

