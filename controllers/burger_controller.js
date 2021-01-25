const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();


router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {

    burger.create(["burger_name", "devour"], [req.body.burger_name, req.body.devour], function(result) {
        res.json({ id: result.insertId });
    });
});



module.exports = router;