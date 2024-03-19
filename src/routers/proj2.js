const express = require("express");
const router = new express.Router();

const predict = require("./connection.js");

router.post("/proj1/senti_proj", async function (req, res) {
  predict(req.body)
    .then((prediction) => res.status(200).send(prediction))
    .catch((error) => console.error("Error:", error));
});

// const data = { /* Your data */ };
// predict(data)
//     .then(prediction => console.log('Prediction:', prediction))
//     .catch(error => console.error('Error:', error));

module.exports = router;
