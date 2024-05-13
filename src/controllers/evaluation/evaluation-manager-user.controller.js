import EvaluationManagerUser from "../../model/evaluation/evaluation-manager-user.model.js";

export const createEvaluationManagerUser = async (req, res, next) => {
  try {
    const { idUser, idEvaluation, idManager, prom, answer, coment, status } = req.body;
    const newEvaluationManagerUser = await EvaluationManagerUser.create({
      idUser,
      idEvaluation,
      idManager,
      prom,
      answer,
      coment,
      status,
    });
    return res.status(201).json(newEvaluationManagerUser);
  } catch (error) {
    next(error);
  }
};

export const updateEvaluationManagerUser = async (req, res, next) => {
  const { id } = req.params;
  const evaluationManagerUser = await EvaluationManagerUser.findOne({
    where: { id },
  });

  if (!evaluationManagerUser) {
    return res.status(404).json({ message: "EvaluationManagerUser not found" });
  }

  evaluationManagerUser.set(req.body);
  await evaluationManagerUser.save();
  return res.json(evaluationManagerUser);
};

export const deleteEvaluationManagerUser = async (req, res, next) => {
  const { id } = req.params;
  const evaluationManagerUser = await EvaluationManagerUser.destroy({
    where: { id },
  });
  if (!evaluationManagerUser) {
    return res.status(404).json({ message: "EvaluationManagerUser not found" });
  }
  return res.sendStatus(204);
};
