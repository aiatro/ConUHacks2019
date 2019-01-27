const express = require('express');
const tdg = require("../class/tdg.js");
const router = express.Router();

myController = new tdg();

router.post("/addclient", function (req, res) {
    let data = req.body.data;
    console.log(data);
    res.setHeader('Content-Type', 'application/json');
    myController.registerClient(data, function (msg) {
        res.send(JSON.stringify(msg));
    });
});

router.post("/viewclients", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    myController.fetchclient(function (msg) {
        res.send(JSON.stringify(msg));
    });

});

module.exports = router;