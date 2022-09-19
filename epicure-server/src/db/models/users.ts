import mongoose from "mongoose";
import validator from 'validator';

const schema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            maxlength: 25,
            trim: true,
            lowercase: true,
            validate: validator.isAlpha
        },
        lastName: {
            type: String,
            require: true,
            maxlength: 25,
            trim: true,
            lowercase: true,
            validate: validator.isAlpha
        },
        email: {
            type: String,
            require: true,
            maxlength: 100,
            unique: true,
            lowercase: true,
            trim: true,
            validate: validator.isEmail,
        },
        password: {
            type: String,
            require: true,
            minlength: 10,
            trim: true
        },
        phone: {
            type: String,
            require: false,
            maxlength: 10,
            trim: true
        },
        addresses: {
            type: Array,
            default: [],
            required: false
        },
        dateJoined: {
            type: Date,
            require: true,
            default: Date.now()
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", schema);

export default User;
