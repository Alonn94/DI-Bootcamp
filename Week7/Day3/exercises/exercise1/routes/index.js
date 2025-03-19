const express = require("express");
const router = express.Router();

router.get("/",(request,response) => {
    response.send("Welcome to the Homepage!");

});

router.get("/about", (request,response) => {
    response.send("Welcome to the About page");

});


module.exports = router; 

