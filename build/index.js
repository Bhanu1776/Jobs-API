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
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const process_1 = __importDefault(require("process"));
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const PORT = process_1.default.env.PORT || 5000;
const job_routes = require("./routes/AppRoutes");
app.get("/", (req, res) => {
    res.json({ msg: "I am Root" });
});
//* Middleware (To set router)
app.use("/api/jobs", job_routes);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectDB(process_1.default.env.DATABASE);
        app.listen(PORT, () => {
            console.log(`Yes I am connected to ${PORT} Port`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
start();
//# sourceMappingURL=index.js.map