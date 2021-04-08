const jwt= require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const {User, validate} = require("../models/user");

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

    res.send(user);
})

module.exports = router;