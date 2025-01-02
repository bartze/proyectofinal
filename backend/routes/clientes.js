const express = require("express");
const router = express.Router();
const { Cliente } = require("../models/Cliente");

router.get("/clientes", async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    res.status(500).json({ error: "Error al obtener clientes" });
  }
});

module.exports = router;
