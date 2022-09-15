import mongoose from "mongoose";
import { isEmail, isAlpha } from 'validator';

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        maxlength: 25,
        trim: true,
        lowercase: true,
        validate: isAlpha
    },
    lastName: {
        type: String,
        require: true,
        maxlength: 25,
        trim: true,
        lowercase: true,
        validate: isAlpha
    },
    email: {
        type: String,
        require: true,
        maxlength: 60,
        unique: true,
        lowercase: true,
        trim: true,
        validate: isEmail,
    },
    password: {
        type: String,
        require: true,
        minlength: 3,
        trim: true
    },
    phone: {
        type: String,
        require: false,
        maxlength: 10,
        trim: true
    },
    dateJoined: {
        type: Date,
        require: true,
        default: Date.now()
    },
    addresses: {
        type: Array,
        default: [],
        required: false
    }
});

const User = mongoose.model("User", schema);

export default User;
