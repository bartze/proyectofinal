const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, // Usa la variable de entorno
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: console.log,
  }
);

module.exports = sequelize;
