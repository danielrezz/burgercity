const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();


router.get("/", async function(req, res) {

    // let hbsObject = {burgers: data};

    const result = await burger.all();

    return result;

    // res.render("index", hbsObject);

});

// router.get("/", function(req, res) {
//     burger.all(function(data) {
//       var hbsObject = {
//         burgers: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });




module.exports = router;