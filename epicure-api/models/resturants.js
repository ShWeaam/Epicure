const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxlength: 50
    },
    chef: {
        type: String,
        require: true,
        maxlength: 50
    },
    rating: {
        type: Number,
        require: true,
        default: 1
    },
    openTime: {
        type: Number,
        require: true,
        default: 1000
    },
    closeTime: {
        type: Number,
        require: true,
        default: 2400
    },
    imgUrl: {
        type: String,
        require: false,
        default: ""
    },
    bigImgUrl: {
        type: String,
        require: false,
        default: ""
    },
    dateJoined: { 
        type: Date, 
        require: true, 
        default: Date.now() 
    },
    views: { 
        type: Number, 
        required: true, 
        default: 0 
    }
});

const Resturant = mongoose.model("Resturant", schema);

module.exports = Resturant;
