"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const express_validator_1 = require("express-validator");
exports.create = [
    (0, express_validator_1.body)("name").isLength({
        min: 4
    }).withMessage("Le nom doit avoir au moins 4 caractères"),
    (0, express_validator_1.body)("description").isLength({
        min: 1
    }).withMessage("La description doit avoir au moins 1 caractères"),
    (0, express_validator_1.body)("city").isLength({
        min: 2
    }).withMessage("La ville doit avoir au moins 2 caractères"),
    (req, res, next) => {
        const errorsValidation = (0, express_validator_1.validationResult)(req);
        console.log('%c⧭', 'color: #d90000', errorsValidation);
        if (!errorsValidation.isEmpty()) {
            // je dois formater les erreurs pour coller au modele : {success: false, result: {name: "Le nom doit ..."}}
            let errors = {};
            errorsValidation.errors.map((err) => {
                errors = Object.assign(Object.assign({}, errors), { [err.param]: err.msg });
            });
            res.json({
                success: false,
                result: errors
            });
        }
        else {
            next();
        }
    }
];
