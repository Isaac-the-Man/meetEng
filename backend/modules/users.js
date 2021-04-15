const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const {User, validate} = require("../models/user");
const auth = require('../middleware/auth');
const Joi = require('joi');

// create new user
router.post('/', async (req, res) => {
    // input validation
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // create new user
    let user = new User({
        name: req.body.name,
        pass: req.body.pass
    });

    // hash password
    const salt = await bcrypt.genSalt(10);
    user.pass = await bcrypt.hash(user.pass, salt);

    await user.save();

    // generate auth token
    const token = user.generateAuthToken();

    res.send(token);
})

// change password
router.post('/edit', auth, async (req, res) => {
    // input validation
    const schema = Joi.object({
        pass: Joi.string().max(255).required(),
    });
    const {error} = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.pass, salt);

    // query and update
    try {
        await User.findByIdAndUpdate(req.user._id, {pass: hashed});
        res.send(true);
    } catch (e) {
        console.log(e);
        res.status(500).send("Database error.");
    }
})

module.exports = router;