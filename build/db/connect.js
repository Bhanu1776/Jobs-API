"use strict";
const mongoose = require("mongoose");
const uri = "mongodb+srv://Bhanu1776:Bhanu1776@cluster0.icllpif.mongodb.net/Freelanster?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
const connectDB = () => {
    console.log("Connected");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
module.exports = connectDB;
//# sourceMappingURL=connect.js.map