import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";

const CostCenter = sequelize.define(
  "CostCenter",
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
    costCenterKey: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {}
);

export default CostCenter;
