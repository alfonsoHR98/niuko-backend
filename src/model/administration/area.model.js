import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";

const Area = sequelize.define(
  "Area",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    abreviation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

export default Area;
