const Joi = require("joi");
const mongoose = require("mongoose");

const User =  mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    pass: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
}))

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().alphanum().max(255).required(),
        pass: Joi.string().max(255).required()
    });
    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;