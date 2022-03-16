"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const SportmanSchema = new Schema({
    name: {
        type: String,
        // unique: true,
        required: [true, "Le nom est obligatoire"],
    },
    age: {
        type: Number,
        required: [true, "L'âge est requis"]
    },
    sports: {
        type: String,
        required: [true, "Le sports doit etre requis"],
    }
});
exports.default = mongoose_1.default.model("sportsman", SportmanSchema);
