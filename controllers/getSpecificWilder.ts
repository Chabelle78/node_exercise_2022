import WilderModel from "../models/Wilder";
import { verifUser } from "../utilities/tools";
import { NextFunction, Request, Response } from "express";

export default {
  getAll: async (req: Request, res: Response) => {
    await WilderModel.find()
      .then((result) => {
        res.status(200).json({
          success: true,
          result,
        });
      })
      .catch((err) => {
        res.status(400).json({
          success: false,
          result: verifUser(err),
        });
      });
  },
  getOne: async (req: Request, res: Response, next: NextFunction) => {
    const { _id } = req.params;

    try {
      const getOne = await WilderModel.findById({
        _id,
      }).exec();
      console.log("yepaaaa");
      res.status(200).json(getOne);
    } catch (error) {
      console.log(error);
      res.status(404);
      next(error);
    }
  },

  delete: (req: Request, res: Response, next: NextFunction) => {
    const { _id } = req.params;
    WilderModel.deleteOne({
      _id,
    })
      .then((result) => {
        if (result.deletedCount === 0) {
          return res.json({
            success: false,
            result: "Cet identifiant n'existe pas",
          });
        }
        res.status(200).json({
          success: true,
          result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          success: false,
          result: verifUser(err),
        });
      });
  },

  update: (req: Request, res: Response) => {
    const { _id } = req.params;
    const { name, city, skills, description } = req.body;
    WilderModel.updateOne(
      {
        _id,
      },
      {
        name,
        city,
        description,
        skills,
      }
    )
      .then((result) => {
        console.log(result);
        if (result.matchedCount === 0) {
          return res.json({
            success: false,
            result: "cet identifiant n'existe pas",
          });
        }
        res.json({
          success: true,
          result,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          result: verifUser(err),
        });
      });
  },

  find: (req: Request, res: Response) => {
    const { _id } = req.params;
    WilderModel.find({
      _id,
    })
      .then((result) => {
        if (!result) {
          return res.json({
            succes: false,
            result: "cet identifiant nexiste pas",
          });
        }
        res.json({
          succes: true,
          result,
        });
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
