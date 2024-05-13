import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";

const Insurance = sequelize.define(
  "Insurance",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    num: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    beneficiary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

export default Insurance;
