"use strict";
const mongoosee = require("mongoose");
const jobSchema = new mongoosee.Schema({
    title: {
        type: String,
        required: [true, "title must be provided"],
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    description: {
        type: String,
        required: [true, "description must be provided"],
    },
    price: {
        type: Number,
        required: [true, "Price must be provided"],
    },
    category: {
        type: String,
        required: false,
    },
    image: {
        type: String,
    },
});
module.exports = mongoosee.model("Jobs", jobSchema);
//# sourceMappingURL=JobSchema.js.map