import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import Insurance from "./insurance.model.js";
import User from "./user.model.js";
import Address from "./address.model.js";
import UserAdministration from "../administration/userAdministration.model.js";

const UserInfo = sequelize.define(
  "Userinfo",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    idUser: {
      type: DataTypes.UUID,
      allowNull: true,
      foreignKey: true,
    },
    idInsurance: {
      type: DataTypes.UUID,
      allowNull: true,
      foreignKey: true,
    },
    idAddress: {
      type: DataTypes.UUID,
      allowNull: true,
      foreignKey: true,
    },
    idAdministration: {
      type: DataTypes.UUID,
      allowNull: true,
      foreignKey: true,
    },
  },
  {}
);

// Relacion 1 a 1 con UserInfo
User.hasOne(UserInfo, {
  foreignKey: "idUser",
});

UserInfo.belongsTo(User, {
  foreignKey: "idUser",
});

// Relacion 1 a 1 con Insurance
Insurance.hasOne(UserInfo, {
  foreignKey: "idInsurance",
});

UserInfo.belongsTo(Insurance, {
  foreignKey: "idInsurance",
});

// Relacion 1 a 1 con Address
Address.hasOne(UserInfo, {
  foreignKey: "idAddress",
});

UserInfo.belongsTo(Address, {
  foreignKey: "idAddress",
});

// Relacion 1 a 1 con UserAdministration
UserAdministration.hasOne(UserInfo, {
  foreignKey: "idAdministration",
});

UserInfo.belongsTo(UserAdministration, {
  foreignKey: "idAdministration",
});

export default UserInfo;
