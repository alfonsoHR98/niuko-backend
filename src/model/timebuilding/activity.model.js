import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import Service from "./service.model.js";

const Activity = sequelize.define(
  "Activity",
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idService: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {}
);

// Relationship one to many with Service
Activity.belongsTo(Service, { foreignKey: "idService" });
Service.hasMany(Activity, { foreignKey: "idService" });

export default Activity;