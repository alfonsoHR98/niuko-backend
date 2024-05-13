import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import Proyect from "./proyect.model.js";
import User from "../users/user.model.js";

const ProyectUser = sequelize.define(
  "ProyectUser",
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
    idUser: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {}
);

// Relacion ProyectUser - Proyect
ProyectUser.belongsTo(Proyect, {
  foreignKey: "idProyect",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Proyect.hasMany(ProyectUser, {
  foreignKey: "idProyect",
});

// Relacion ProyectUser - User
ProyectUser.belongsTo(User, {
  foreignKey: "idUser",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasMany(ProyectUser, {
  foreignKey: "idUser",
});

export default ProyectUser;
