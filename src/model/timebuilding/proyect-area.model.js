import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import Area from "../administration/area.model.js";
import Proyect from "./proyect.model.js";

const ProyectArea = sequelize.define(
  "ProyectArea",
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
    idArea: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {}
);

// Relacion ProyectArea - Proyect
ProyectArea.belongsTo(Proyect, {
  foreignKey: "idProyect",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Proyect.hasMany(ProyectArea, {
  foreignKey: "idProyect",
});

// Relacion ProyectArea - Area
ProyectArea.belongsTo(Area, {
  foreignKey: "idArea",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Area.hasMany(ProyectArea, {
  foreignKey: "idArea",
});

export default ProyectArea;
