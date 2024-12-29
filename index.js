const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Importar rutas
const clientesRouter = require("./backend/routes/clientes");

// Usar rutas
app.use("/clientes", clientesRouter);

// Importar y sincronizar Sequelize
const sequelize = require("./backend/models/index");

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) =>
    console.log("Error al sincronizar la base de datos:", error)
  );
