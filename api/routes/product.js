const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Sepatu", price: 250000 },
    { id: 2, name: "Tas", price: 150000 },
  ]);
});

module.exports = router;
