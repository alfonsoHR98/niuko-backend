import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import User from "../users/user.model.js"
import Evaluation from "./evaluation.model.js"

const EvaluationManagerUser = sequelize.define(
  "EvaluationManagerUser",
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
    idManager: {
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

//Relacion uno a muchos User to EvaluationManagerUser
User.hasMany(EvaluationManagerUser, { foreignKey: "idUser" });
EvaluationManagerUser.belongsTo(User, {foreignKey: "idUser"});

//Relacion uno a muchos Evaluation to EvaluationManagerUser
Evaluation.hasMany(EvaluationManagerUser, { foreignKey: "idEvaluation" });
EvaluationManagerUser.belongsTo(Evaluation, { foreignKey: "idEvaluation" });

//Relacion uno a muchos User to EvaluationManagerUser
User.hasMany(EvaluationManagerUser, { foreignKey: "idManager" });
EvaluationManagerUser.belongsTo(User, { foreignKey: "idManager" });

export default EvaluationManagerUser