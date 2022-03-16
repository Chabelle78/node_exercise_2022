"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifUserSportsMan = exports.verifUser = void 0;
const verifUser = (err) => {
    let errors = {};
    Object.keys(err.errors).map((key) => {
        errors = Object.assign(Object.assign({}, errors), { [key]: err.errors[key].message });
    });
    err.code === 11000 &&
        Object.keys(err.keyPattern).map((key) => {
            errors = Object.assign(Object.assign({}, errors), { [key]: `${key} existe déjà` });
        });
    if (err.kind && err.kind === "ObjectId") {
        errors = Object.assign(Object.assign({}, errors), { objectId: "Cet identifiant n'est pas un ObjectId valide" });
    }
    return errors;
};
exports.verifUser = verifUser;
const verifUserSportsMan = (err) => {
    let errors = {};
    Object.keys(err.errors).map((key) => {
        errors = Object.assign(Object.assign({}, errors), { [key]: err.errors[key].message });
    });
    err.code === 11000 &&
        Object.keys(err.keyPattern).map((key) => {
            errors = Object.assign(Object.assign({}, errors), { [key]: `${key} existe déjà` });
        });
    return errors;
};
exports.verifUserSportsMan = verifUserSportsMan;
