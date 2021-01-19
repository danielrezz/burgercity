const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();


router.get("/", async function(req, res) {


    const result = await burger.all(data)


});

// router.get("/", function(req, res) {
//     cat.all(function(data) {
//       var hbsObject = {
//         cats: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });




module.exports = router;