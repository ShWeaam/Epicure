const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxlength: 50
    },
    imgUrl: {
        type: String,
        require: false,
        default: ""
    },
    views: {
        type: Number,
        required: true,
        default: 0
    },
    dateJoined: {
        type: Date,
        require: true,
        default: Date.now()
    }
});

const Chef = mongoose.model("Chef", schema);

module.exports = Chef;
