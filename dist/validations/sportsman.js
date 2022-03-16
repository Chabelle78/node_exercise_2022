"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const express_validator_1 = require("express-validator");
exports.create = [
    (0, express_validator_1.body)("name").isString().isLength({
        min: 2
    }).withMessage("Le nom est requis, il doit etre une chaine de caractère et contenir au moins deux lettres"),
    (0, express_validator_1.body)("age").isNumeric().withMessage("L'âge est requis, il doit etre une chaine de nombre"),
    (0, express_validator_1.body)("sports").isString().isLowercase().isLength({
        min: 2
    }).withMessage("Le sport est requis, il doit etre une chaine de caractère en minuscule et contenir au moins deux lettre"),
    (req, res, next) => {
        const errorsValidation = (0, express_validator_1.validationResult)(req);
        if (!errorsValidation.isEmpty()) {
            let errors = {};
            errorsValidation.errors.map((err) => {
                errors = Object.assign(Object.assign({}, errors), { [err.param]: err.msg });
            });
            res.json({
                success: false,
                results: errors,
            });
        }
        else {
            next();
        }
    }
];
