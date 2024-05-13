import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";

const Address = sequelize.define(
  "Address",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    internalNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    externalNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    suburb: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);

export default Address;
