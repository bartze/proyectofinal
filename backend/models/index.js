const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("tiendavideojuegos", "postgres", "changeme", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
