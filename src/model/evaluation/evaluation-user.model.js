import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import User from "../users/user.model.js"
import Evaluation from "./evaluation.model.js"

const EvaluationUser = sequelize.define(
  "EvaluationUser",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    idUser: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    idEvaluation: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    prom: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    answer: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    coment: {
      type: DataTypes.STRING(5000),
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {}
);

//Relacion uno a muchos User to EvaluationUser
User.hasMany(EvaluationUser, { foreignKey: "idUser" });
EvaluationUser.belongsTo(User, { foreignKey: "idUser" });

//Relacion uno a muchos Evaluation to EvaluationUser
Evaluation.hasMany(EvaluationUser, { foreignKey: "idEvaluation" });
EvaluationUser.belongsTo(Evaluation, { foreignKey: "idEvaluation" });


export default EvaluationUser
