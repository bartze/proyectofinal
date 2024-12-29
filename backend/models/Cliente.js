const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Cliente = sequelize.define("Cliente", {
  nombre: DataTypes.STRING,
  direccion: DataTypes.STRING,
  correo_electronico: DataTypes.STRING,
  telefono: DataTypes.STRING,
});

module.exports = Cliente;
