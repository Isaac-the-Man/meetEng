const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const config = require('../config.json');


// check if private key exists
if (!config.jwtPrivateKey) {
    console.error('FATAL ERROR: jwtPrivateKey not found.');
    process.exit(1);
}

const userSchema = new mongoose.Schema({
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
});

userSchema.methods.generateAuthToken = function() {
    return jwt.sign({_id: this.id}, config.jwtPrivateKey);
}

const User =  mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().alphanum().max(255).required(),
        pass: Joi.string().max(255).required()
    });
    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;