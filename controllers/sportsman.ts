import SportsManModel from "../models/Sportman"
import {
    validationResult
} from "express-validator"
import {
    verifUserSportsMan
} from "../utilities/tools"


export default {
    create: (req, res, next) => {
        const {
            name,
            age,
            sports
        } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: verifUserSportsMan(errors)
            })
        }

        SportsManModel.init()
            .then(() => {
                const sportsMan = new SportsManModel({
                    name: name,
                    age: age,
                    sports: sports
                });

                sportsMan.save().then((result) => {
                    res.json({
                        success: true,
                        result
                    });
                }).catch((err) => {
                    res.status(400).json({
                        success: false,
                        result: verifUserSportsMan(err)
                    })
                })
            })

    }

}