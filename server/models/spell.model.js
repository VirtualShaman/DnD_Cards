const mongoose = require("mongoose");

const SpellSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters"]
    },

    level: {
        type: String,
        required: [true, "Casting level is required"]
    },

    castingTime: {
        type: String,
        required: [true, "Casting time is required"]
    },

    range: {
        type: String,
        required: [true, "Range is required"]
    },

    components: {
        type: String,
        required: [true, "Components are required"]
    },

    duration: {
        type: String,
        required: [true, "Duration is required"]
    },

    description: {
        type: String,
        required: [true, "Description is required"]
    },

    highLevel: {
        type: String
    },

    picture: {
        type: String
    }
});

const Spell = mongoose.model("Spell", SpellSchema)

module.exports = Spell;