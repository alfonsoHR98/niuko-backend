import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import Area from "../administration/area.model.js";

const Evaluation = sequelize.define(
  "Evaluation",
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
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    idArea: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {}
);

// Relation one to many between Area and Evaluation
Area.hasMany(Evaluation, { foreignKey: "idArea" });
Evaluation.belongsTo(Area, { foreignKey: "idArea" });

export default Evaluation;
