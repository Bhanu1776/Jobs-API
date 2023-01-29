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
    const { category, title, sort, select } = req.query;
    // type Obj = {
    //   title: any;
    //   description: any;
    //   price: any;
    //   category: any;
    // };
    // var queryObject: Obj = {
    //   title: undefined,
    //   description: undefined,
    //   price: undefined,
    //   category: undefined,
    // };
    // if (category) {
    //   queryObject.category = category;
    // }
    // if (title) {
    //   queryObject.title = { $regex: title, $options: "i" };
    // }
    // let myArray: any = sort;
    // let splitArray = [];
    // for (let i = 0; i < myArray.length; i++) {
    //   splitArray.push(myArray[i].split(",").join(" "));
    // }
    // console.log(splitArray);
    let apiData = JobSchema.find(req.query);
    // if (sort) {
    //   let sortFix = splitArray.split(",").join(" ");
    //   apiData = apiData.sort(sortFix);
    // }
    // if (select) {
    //   // let selectFix = select.replace(",", " ");
    //   let selectFix = select.split(",").join(" ");
    //   apiData = apiData.select(selectFix);
    // }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit);
    const myData = yield apiData;
    res.status(200).json({ myData, nbHits: myData.length });
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