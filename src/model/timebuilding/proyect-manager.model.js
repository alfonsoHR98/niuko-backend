import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import User from "../users/user.model.js";
import Proyect from "./proyect.model.js";

const ProyectManager = sequelize.define(
  "ProyectManager",
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
    idManager: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {}
);

// Relacion ProyectManager - Proyect
ProyectManager.belongsTo(Proyect, {
  foreignKey: "idProyect",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Proyect.hasMany(ProyectManager, {
  foreignKey: "idProyect",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Relacion ProyectManager - User
ProyectManager.belongsTo(User, {
  foreignKey: "idManager",
});
User.hasMany(ProyectManager, {
  foreignKey: "idManager",
});

export default ProyectManager;
