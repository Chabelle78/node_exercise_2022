"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Wilder_1 = __importDefault(require("../models/Wilder"));
const tools_1 = require("../utilities/tools");
exports.default = {
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield Wilder_1.default.find()
            .then((result) => {
            res.status(200).json({
                success: true,
                result,
            });
        })
            .catch((err) => {
            res.status(400).json({
                success: false,
                result: (0, tools_1.verifUser)(err),
            });
        });
    }),
    getOne: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { _id } = req.params;
        try {
            const getOne = yield Wilder_1.default.findById({
                _id
            }).exec();
            console.log("yepaaaa");
            res.status(200).json(getOne);
        }
        catch (error) {
            console.log(error);
            res.status(404);
            next(error);
        }
    }),
    delete: (req, res, next) => {
        const { _id } = req.params;
        Wilder_1.default.deleteOne({
            _id
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
                result: (0, tools_1.verifUser)(err),
            });
        });
    },
    update: (req, res) => {
        const { _id, name, city, skills } = req.body;
        Wilder_1.default.updateOne({
            _id
        }, {
            name,
            city,
            skills
        })
            .then((result) => {
            console.log(result);
            if (result.matchedCount === 0) {
                return res.json({
                    success: false,
                    result: "cet identifiant n'existe pas"
                });
            }
            res.json({
                success: true,
                result
            });
        }).catch((err) => {
            res.json({
                success: false,
                result: (0, tools_1.verifUser)(err)
            });
        });
    },
    find: (req, res) => {
        const { _id } = req.params;
        Wilder_1.default.find({
            _id
        }).then((result) => {
            if (!result) {
                return res.json({
                    succes: false,
                    result: "cet identifiant nexiste pas"
                });
            }
            res.json({
                succes: true,
                result
            });
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }
};
