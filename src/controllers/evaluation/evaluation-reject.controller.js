import EvaluationReject from "../../model/evaluation/evaluation-reject.model.js";

export const createEvaluationReject = async (req, res, next) => {
  try {
    const { reason, date } = req.body;
    const newEvaluationReject = await EvaluationReject.create({
      reason,
      date,
    });
    return res.status(201).json(newEvaluationReject);
  } catch (error) {
    next(error);
  }
};

export const updateEvaluationResult = async (req, res, next) => {
  const { id } = req.params;
  try {
    const evaluationReject = await EvaluationReject.findOne({ where: { id } });

    if (!evaluationReject) {
      return res.status(404).json({ message: "EvaluationReject not found" });
    }

    evaluationReject.set(req.body);
    await evaluationReject.save();
    return res.json(evaluationReject);
  } catch (error) {
    next(error);
  }
}

export const deleteEvaluationReject = async (req, res, next) => {
  const { id } = req.params;
  const evaluationReject = await EvaluationReject.destroy({ where: { id } });
  if (!evaluationReject) {
    return res.status(404).json({ message: "EvaluationReject not found" });
  }
  return res.sendStatus(204);
};
