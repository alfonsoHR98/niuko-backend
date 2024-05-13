import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import Proyect from "./proyect.model.js";
import Office from "../administration/office.model.js";

const ProyectOffice = sequelize.define(
  "ProyectOffice",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    idProyect: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    idOffice: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {}
);

// Relacion ProyectOffice - Proyect
ProyectOffice.belongsTo(Proyect, {
  foreignKey: "idProyect",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Proyect.hasMany(ProyectOffice, {
  foreignKey: "idProyect",
});

// Relacion ProyectOffice - Office
ProyectOffice.belongsTo(Office, {
  foreignKey: "idOffice",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Office.hasMany(ProyectOffice, {
  foreignKey: "idOffice",
});

export default ProyectOffice;
