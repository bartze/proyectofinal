const { Sequelize } = require("sequelize");
require("dotenv").config(); // Si usas un archivo .env

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, // Usa la variable de entorno
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: console.log, // Útil para depuración
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida correctamente.");
  } catch (error) {
    console.error("Error al conectar:", error);
  }
}

testConnection();