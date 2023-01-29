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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllJobsTesting = exports.Temp = exports.getAllJobs = void 0;
const JobSchema = require("../models/JobSchema");
const getAllJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, title } = req.query;
    const queryObject = {
        title: undefined,
        description: undefined,
        price: undefined,
        category: undefined,
    };
    if (category) {
        queryObject.category = category;
    }
    if (title) {
        queryObject.title = { $regex: title, $options: "i" };
    }
    const myData = yield JobSchema.find(queryObject);
    res.status(200).json({ myData });
});
exports.getAllJobs = getAllJobs;
const Temp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myData = yield JobSchema.find(req.query);
    res.status(200).json({ myData });
});
exports.Temp = Temp;
const getAllJobsTesting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myData = yield JobSchema.find(req.query);
    res.status(200).json({ myData });
});
exports.getAllJobsTesting = getAllJobsTesting;
//# sourceMappingURL=Jobs.js.map