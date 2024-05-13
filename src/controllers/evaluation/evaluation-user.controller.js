import EvaluationUser from "../../model/evaluation/evaluation-user.model.js"

export const createEvaluationUser = async (req, res, next) => {
  try {
    const { idUser, idEvaluation, prom, answer, coment, status } = req.body;
    const newEvaluationUser = await EvaluationUser.create({
      idUser,
      idEvaluation,
      prom,
      answer,
      coment,
      status,
    });
    return res.status(201).json(newEvaluationUser);
  } catch (error) {
    next(error);
  }
}

export const updateEvaluationUser = async (req, res, next) => {
  const { id } = req.params;
  const evaluationUser = await EvaluationUser.findOne({ where: { id } });

  if (!evaluationUser) {
    return res.status(404).json({ message: "EvaluationUser not found" });
  }

  evaluationUser.set(req.body);
  await evaluationUser.save();
  return res.json(evaluationUser);
}

export const deleteEvaluationUser = async (req, res, next) => {
  const { id } = req.params;
  const evaluationUser = await EvaluationUser.destroy({ where: { id } });
  if (!evaluationUser) {
    return res.status(404).json({ message: "EvaluationUser not found" });
  }
  return res.sendStatus(204);
}
