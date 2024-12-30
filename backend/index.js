const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require("./models"); // Importa directamente Sequelize

// Importar rutas
const clientesRouter = require("./routes/clientes");

// Usar rutas
app.use("/clientes", clientesRouter);

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
