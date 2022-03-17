import SportsManModel from "../models/Sportman"
import { NextFunction, Request, Response } from "express";


export default {
    getMany: async (req:Request, res:Response, next:NextFunction) => {
        try {
            const userSports = await SportsManModel.find({
                sports: "rugby"
            }).exec();
            console.log("yeppppaaaa vive le rugby")
            res.status(201).json(userSports)

        } catch (error) {
            console.log(error),
                res.status(404)
            next(error)
        }
    },
}