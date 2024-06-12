import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import EvaluationManagerUser from "./evaluation-manager-user.model.js";
import EvaluationUser from "./evaluation-user.model.js";
import Evaluation from "./evaluation.model.js";
import EvaluationReject from "./evaluation-reject.model.js";

const EvaluationResult = sequelize.define(
  "EvaluationResult",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    idEvaluationUser: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    idEvaluationManagerUser: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    idEvaluation: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    idEvaluationReject: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {}
);

//Relacion uno a uno EvaluationResult to EvaluationReject
EvaluationReject.hasOne(EvaluationResult, { foreignKey: "idEvaluationReject" });
EvaluationResult.belongsTo(EvaluationReject, { foreignKey: "idEvaluationReject" });

//Relacion uno a uno EvaluationUser to EvaluationResult
EvaluationUser.hasOne(EvaluationResult, { foreignKey: "idEvaluationUser" });
EvaluationResult.belongsTo(EvaluationUser, { foreignKey: "idEvaluationUser" });

//Relacion uno a uno EvaluationManagerUser to EvaluationResult
EvaluationManagerUser.hasOne(EvaluationResult, {
  foreignKey: "idEvaluationManagerUser",
});
EvaluationResult.belongsTo(EvaluationManagerUser, {
  foreignKey: "idEvaluationManagerUser",
});

//Relacion uno a Muchos Evaluation to EvaluationResult
Evaluation.hasMany(EvaluationResult, { foreignKey: "idEvaluation" });
EvaluationResult.belongsTo(Evaluation, { foreignKey: "idEvaluation" });

export default EvaluationResult;
