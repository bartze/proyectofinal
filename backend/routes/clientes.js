const express = require("express");
const router = express.Router();
const Cliente = require("../models/cliente");

router.get("/", async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
});

module.exports = router;
