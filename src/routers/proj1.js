const express = require("express");
const router = new express.Router();
const calculation = require('./calc.js');

console.log(calculation)
router.post("/proj1/pred_Prod", async function (req, res) {
  const productivity = await calculation.calc(req.body)
  res.status(201).send(productivity);
});

module.exports = router;
