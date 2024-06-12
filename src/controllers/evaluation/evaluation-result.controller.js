import EvaluationResult from "../../model/evaluation/evaluation-result.model.js";
import Evaluation from "../../model/evaluation/evaluation.model.js";
import EvaluationUser from "../../model/evaluation/evaluation-user.model.js";
import EvaluationManagerUser from "../../model/evaluation/evaluation-manager-user.model.js";
import EvaluationReject from "../../model/evaluation/evaluation-reject.model.js";
import User from "../../model/users/user.model.js";
import UserAdministration from "../../model/administration/userAdministration.model.js";
import UserInfo from "../../model/users/userInfo.model.js";
import Employment from "../../model/administration/employment.model.js";
import Office from "../../model/administration/office.model.js";
import Area from "../../model/administration/area.model.js";

export const getEvaluationResults = async (req, res, next) => {
  try {
    const evaluationResults = await EvaluationResult.findAll({
      include: [
        {
          model: EvaluationUser,
          attributes: { exclude: ["createdAt", "updatedAt"] },
          include: [
            {
              model: User,
              attributes: ["id", "firstName", "lastName", "email"],
              include: [
                {
                  model: UserInfo,
                  attributes: ["id"],
                  include: [
                    {
                      model: UserAdministration,
                      attributes: ["id"],
                      include: [
                        {
                          model: Employment,
                        },
                        {
                          model: Area,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          model: EvaluationManagerUser,
          attributes: { exclude: ["createdAt", "updatedAt"] },
          include: [
            {
              model: User,
              attributes: ["id", "firstName", "lastName", "email"],
            },
          ],
        },
        {
          model: Evaluation,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: EvaluationReject,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });
    return res.status(200).json(evaluationResults);
  } catch (error) {
    next(error);
  }
};

export const getEvaluationResult = async (req, res, next) => {
  const { id } = req.params;
  try {
    const evaluationResult = await EvaluationResult.findOne({
      where: { id },
      include: [
        {
          model: EvaluationUser,
          attributes: { exclude: ["createdAt", "updatedAt"] },
          include: [
            {
              model: User,
              attributes: ["id", "firstName", "lastName", "email"],
            },
          ],
        },
        {
          model: EvaluationManagerUser,
          attributes: { exclude: ["createdAt", "updatedAt"] },
          include: [
            {
              model: User,
              attributes: ["id", "firstName", "lastName", "email"],
            },
          ],
        },
        {
          model: Evaluation,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: EvaluationReject,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });
    return res.status(200).json(evaluationResult);
  } catch (error) {
    next(error);
  }
};

export const createEvaluationResult = async (req, res, next) => {
  try {
    const { idEvaluationUser, idEvaluationManagerUser, idEvaluation } =
      req.body;
    const newEvaluationResult = await EvaluationResult.create({
      idEvaluationUser,
      idEvaluationManagerUser,
      idEvaluation,
    });
    return res.status(201).json(newEvaluationResult);
  } catch (error) {
    next(error);
  }
};

export const updateEvaluationResult = async (req, res, next) => {
  const { id } = req.params;
  try {
    const evaluationResult = await EvaluationResult.findOne({ where: { id } });

    if (!evaluationResult) {
      return res.status(404).json({ message: "EvaluationResult not found" });
    }

    evaluationResult.set(req.body);
    await evaluationResult.save();
    return res.json(evaluationResult);
  } catch (error) {
    next(error);
  }
};

export const deleteEvaluationResult = async (req, res, next) => {
  const { id } = req.params;
  const evaluationResult = await EvaluationResult.destroy({ where: { id } });
  if (!evaluationResult) {
    return res.status(404).json({ message: "EvaluationResult not found" });
  }
  return res.sendStatus(204);
};
