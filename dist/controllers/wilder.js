"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Create, Read, Update, Delete
const Wilder_1 = __importDefault(require("../models/Wilder"));
const tools_1 = require("../utilities/tools");
const express_validator_1 = require("express-validator");
// const methods = {
exports.default = {
    create: (req, res, next) => {
        const { name, city, skills } = req.body;
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: (0, tools_1.verifUser)(errors) });
        }
        -Wilder_1.default.init().then(() => {
            const wilder = new Wilder_1.default({
                name: name,
                city: city,
                skills: skills,
            });
            wilder
                .save()
                .then((result) => {
                res.json({
                    success: true,
                    result
                });
            })
                .catch((err) => {
                res.status(400).json({
                    succes: false,
                    result: (0, tools_1.verifUser)(err)
                });
            });
        });
    }
};
// export default methods;
//Create, Read, Update, Delete
