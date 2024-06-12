import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";

const EvaluationReject = sequelize.define(
  "EvaluationReject",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
    reason: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
    coment: {
      type: DataTypes.STRING(5000),
      allowNull: true,
    },
  },
  {}
);

export default EvaluationReject;
