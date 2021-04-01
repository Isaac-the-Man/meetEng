const express = require('express');
const router = express.Router();

module.exports = (db) => {
    const bp = require('body-parser');
    router.use(bp.urlencoded());
    
    router.get('/lolz', (req, res) => {
	res.send('haha lolz');
    });
    
    router.post('/freshmen', (req, res) => {
	r = db.addUnder(req.body, res);
    });
    
    router.post('/upperclassmen', (req, res) => {
	r = db.addUpper(req.body, res);
    });

    return router;
}
