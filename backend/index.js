const express = require("express");
const app = express();
const clientesRoutes = require("./routes/clientes"); // Importa el enrutador de clientes
require("dotenv").config();
const { sequelize } = require("./models");
const port = 3000;

app.use(express.json());

app.use("/api", clientesRoutes); // Monta el enrutador en /api/clientes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("sequelize antes de sync:", sequelize); // Para depuración

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error al sincronizar la base de datos:", error);
  });
