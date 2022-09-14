import { Schema, model } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        require: true,
        maxlength: 50,
        trim: true
    },
    imgUrl: {
        type: String,
        require: false,
        default: "",
        trim: true
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

const Chef = model("Chef", schema);

export default Chef;
