import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import Proyect from "./proyect.model.js";
import Service from "./service.model.js";

const ProyectService = sequelize.define(
  "ProyectService",
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
    idService: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

// Relacion ProyectService - Proyect
ProyectService.belongsTo(Proyect, {
  foreignKey: "idProyect",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Proyect.hasMany(ProyectService, {
  foreignKey: "idProyect",
});

// Relacion ProyectService - Service
ProyectService.belongsTo(Service, {
  foreignKey: "idService",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Service.hasMany(ProyectService, {
  foreignKey: "idService",
});

export default ProyectService;
