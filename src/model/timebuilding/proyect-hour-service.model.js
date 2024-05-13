import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import ProyectService from "./proyect-service.model.js";
import User from "../users/user.model.js";

const ProyectHourService = sequelize.define(
  "ProyectHourService",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    idProyectService: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    idUser: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hours: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {}
);

// Relacion ProyectHourService - ProyectService
ProyectHourService.belongsTo(ProyectService, {
  foreignKey: "idProyectService",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
ProyectService.hasMany(ProyectHourService, {
  foreignKey: "idProyectService",
});

// Relacion ProyectHourService - User
ProyectHourService.belongsTo(User, {
  foreignKey: "idUser",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasMany(ProyectHourService, {
  foreignKey: "idUser",
});

export default ProyectHourService;
