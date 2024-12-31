const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Cliente = sequelize.define(
  "Cliente",
  {
    cliente_id: {
      // Define la columna cliente_id
      type: DataTypes.INTEGER, // O el tipo de dato que corresponda (ej. UUID, BIGINT)
      primaryKey: true, // Indica que es la clave primaria
      autoIncrement: true, // Si cliente_id es autoincremental
    },
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    correo_electronico: DataTypes.STRING,
    telefono: DataTypes.STRING,
  },
  {
    tableName: "clientes", // Especifica el nombre de la tabla (en minúsculas)
    timestamps: false, // Si tu tabla NO tiene campos createdAt y updatedAt
  }
);

module.exports = { Cliente };
