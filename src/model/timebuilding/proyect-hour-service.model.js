import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import ProyectService from "./proyect-service.model.js";
import Activity from "./activity.model.js";
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
    idActivity: {
      type: DataTypes.UUID,
      allowNull: true,
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

// Relacion ProyectHourService - Activity
ProyectHourService.belongsTo(Activity, {
  foreignKey: "idActivity",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Activity.hasMany(ProyectHourService, {
  foreignKey: "idActivity",
});

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
