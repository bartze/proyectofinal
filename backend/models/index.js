require("dotenv").config();
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  String(process.env.DB_PASSWORD),
  {
    host: "postgres",
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: console.log, // Puedes dejar esto para ver las consultas SQL
  }
);

console.log("sequelize en models/index.js:", sequelize); // Imprime la instancia de sequelize
module.exports = { sequelize }; // Exportación CORRECTA (objeto con la propiedad sequelize)
