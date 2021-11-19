const mongoose = require("mongoose");

const FeatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters"]
    },

    prereq: {
        type: String
    },

    description: {
        type: String,
        required: [true, "Description is required"]
    },

    picture: {
        type: String
    }
});

const Feat = mongoose.model("Feat", FeatSchema)

module.exports = Feat;