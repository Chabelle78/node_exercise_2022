import {
    body,
    validationResult
} from "express-validator"

export const create = [

    body("name").isString().isLength({
        min: 2
    }).withMessage("Le nom est requis, il doit etre une chaine de caractère et contenir au moins deux lettres"),
    body("age").isNumeric().withMessage("L'âge est requis, il doit etre une chaine de nombre"),
    body("sports").isString().isLowercase().isLength({
        min: 2
    }).withMessage("Le sport est requis, il doit etre une chaine de caractère en minuscule et contenir au moins deux lettre"),

    (req, res, next) => {
        const errorsValidation = validationResult(req);
        if (!errorsValidation.isEmpty()) {

            let errors = {};

            errorsValidation.errors.map((err) => {

                errors = {
                    ...errors,
                    [err.param]: err.msg
                }
            })
            res.json({
                success: false,
                results: errors,
            })

        } else {
            next()
        }
    }
]