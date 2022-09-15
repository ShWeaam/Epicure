import Joi, { objectId, object, string } from "joi";
//objectId = require('joi-objectid')(Joi);
import Joi from "joi";

export function signup(data) {
    return object({
        name: string().min(1).max(50).required(),
        email: string().max(255).required().email(),
        password: string().min(3).max(255).required(),
    }).validate(data);
}

export function activate(data) {
    return object({
        userId: objectId().required()
    }).validate(data);
}

export function login(data) {
    return object({
        email: string().min(1).max(255).required().email(),
        password: string().min(3).max(255).required()
    }).validate(data);
}

export function forgotPassword(data) {
    return object({
        email: string().min(1).max(255).required().email()
    }).validate(data);
}

export function resetPassword(data) {
    return object({
        token: string().min(36).max(36).required(),
        password: string().min(3).max(255).required()
    }).validate(data);
}

export function updatePassword(data) {
    return object({
        currentPassword: string().min(3).max(255).required(),
        newPassword: string().min(3).max(255).required()
    }).validate(data);
}

export function changePassword(data) {
    return object({
        newPassword: string().min(3).max(255).required(),
        userId: objectId().required()
    }).validate(data);
}

export function userId(data) {
    return object({
        userId: objectId().required()
    }).validate(data);
}