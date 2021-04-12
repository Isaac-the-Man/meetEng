const jwt = require('jsonwebtoken');
const config = require('../config.json');


module.exports = function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access Denied. No token provided.');
    try {
        req.user = jwt.verify(token, config.jwtPrivateKey);
        next();
    } catch (e) {
        console.log(e);
        res.status(400).search('Invalid Token.');
    }
}