const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: String,
        require: true,
        maxlength: 20
    },
    resturant: {
        type: String,
        require: true,
        maxlength: 50
    },
    mealType: {
        type: String,
        require: true,
        maxlength: 20
    },
    ingredients: {
        type: Array,
        require: true,
    },
    sides: {
        type: Array,
        require: true,
    },
    changes: {
        type: Array,
        require: true,
    },
    imgUrl: {
        type: String,
        require: false,
        default: ""
    },
    isSignatureDish: {
        type: Boolean,
        required: false,
        default: false
    }
});

const Dish = mongoose.model("Dish", schema);

module.exports = Dish;
