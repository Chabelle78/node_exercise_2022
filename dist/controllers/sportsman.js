"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sportman_1 = __importDefault(require("../models/Sportman"));
const express_validator_1 = require("express-validator");
const tools_1 = require("../utilities/tools");
exports.default = {
    create: (req, res, next) => {
        const { name, age, sports } = req.body;
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: (0, tools_1.verifUserSportsMan)(errors),
            });
        }
        Sportman_1.default.init().then(() => {
            const sportsMan = new Sportman_1.default({
                name: name,
                age: age,
                sports: sports,
            });
            sportsMan
                .save()
                .then((result) => {
                res.json({
                    success: true,
                    result,
                });
            })
                .catch((err) => {
                res.status(400).json({
                    success: false,
                    result: (0, tools_1.verifUserSportsMan)(err),
                });
            });
        });
    },
};
