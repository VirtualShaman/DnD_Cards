const mongoose = require("mongoose");

const ClassFeatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters"]
    },

    description: {
        type: String,
        required: [true, "Description is required"]
    },

    picture: {
        type: String
    }
});

const ClassFeat = mongoose.model("ClassFeat", ClassFeatSchema)

module.exports = ClassFeat;