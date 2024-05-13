import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import CostCenter from "./costCenter.model.js";
import Proyect from "./proyect.model.js";

const ProyectCostCenter = sequelize.define(
  "ProyectCostCenter",
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
    idCostCenter: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {}
);

// Relacion ProyectCostCenter - Proyect
ProyectCostCenter.belongsTo(Proyect, {
  foreignKey: "idProyect",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Proyect.hasMany(ProyectCostCenter, {
  foreignKey: "idProyect",
});

// Relacion ProyectCostCenter - CostCenter
ProyectCostCenter.belongsTo(CostCenter, {
  foreignKey: "idCostCenter",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
CostCenter.hasMany(ProyectCostCenter, {
  foreignKey: "idCostCenter",
});

export default ProyectCostCenter;
