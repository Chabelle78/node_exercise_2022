import {
    body,
    validationResult
} from "express-validator";
import {Request, Response} from "express"


export const create = [
    body("name").isLength({
        min: 4
    }).withMessage("Le nom doit avoir au moins 4 caractères"),
    body("description").isLength({
        min: 1
    }).withMessage("La description doit avoir au moins 1 caractères"),
    body("city").isLength({
        min: 2
    }).withMessage("La ville doit avoir au moins 2 caractères"),
    (req:Request, res:Response, next) => {
        const errorsValidation:any = validationResult(req);
        console.log('%c⧭', 'color: #d90000', errorsValidation);
        if (!errorsValidation.isEmpty()) {
            // je dois formater les erreurs pour coller au modele : {success: false, result: {name: "Le nom doit ..."}}
            let errors = {};

            errorsValidation.errors.map((err) => {
                errors = { ...errors, [err.param]: err.msg}
            })
            
            res.json({
                success: false,
                result: errors
            })


        } else {
            next();
        }

    }

]