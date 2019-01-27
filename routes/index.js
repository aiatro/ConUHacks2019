const express = require('express');
const router = express.Router();



router.use('/routes', require('./routes.js'));


router.get("/ab", function (req, res) {
    res.send("FROM AB");
})
router.post("/catalog/view", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    myController.catalogView(function (msg) {
        console.log(msg);
        res.send(JSON.stringify(msg));
    });
})

module.exports = router;