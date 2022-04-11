"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sportsman_1 = __importDefault(require("../controllers/sportsman"));
const validations_1 = require("../validations");
const getSpecificWilder_1 = __importDefault(require("../controllers/getSpecificWilder"));
const getAllUserSports_1 = __importDefault(require("../controllers/getAllUserSports"));
const wilder_1 = __importDefault(require("../controllers/wilder"));
const router = express_1.default.Router();
// app.get("/", (req, res)=>{
//   console.log("we are connected");
//   res.status(200).json("we are good")
// })
router.post("/wilder/create", validations_1.wilderValidation.create, wilder_1.default.create);
router.post("/sportsman/create", validations_1.sportsManValidation.create, sportsman_1.default.create);
router.get("/wilders", getSpecificWilder_1.default.getAll);
router.get("/wilder/name", getSpecificWilder_1.default.getOne);
router.get("/sports/specific", getAllUserSports_1.default.getMany);
router.delete("/wilder/delete/:_id", getSpecificWilder_1.default.delete);
router.put("/wilder/update/:_id", getSpecificWilder_1.default.update);
router.get("/wilder/find/:_id", getSpecificWilder_1.default.find);
exports.default = router;
