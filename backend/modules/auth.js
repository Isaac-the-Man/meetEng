const jwt= require("jsonwebtoken");
const mongoose = require("mongoose");
const Joi = require("Joi");
const express = require("express");
const router = express.Router();
const {User, validateUser} = require("../models/user");

router.post('/auth', async (req, res) => {

})

module.exports = router;