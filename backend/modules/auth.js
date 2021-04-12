const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const {User, validate} = require("../models/user");


// authenticate user
router.post('/', async (req, res) => {
    // input validation
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if user exists
    let user = await User.findOne({name: req.body.name});
    if (!user) return res.status(400).send('Invalid name or password.');

    // check password
    const validPass = await bcrypt.compare(req.body.pass, user.pass);
    if (!validPass) return res.status(400).send('Invalid name or password.');

    // generate auth token
    const token = user.generateAuthToken();

    res.send(token);
});

module.exports = router;