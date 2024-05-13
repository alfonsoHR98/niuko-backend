import Evaluation from "../../model/evaluation/evaluation.model.js"

export const getEvaluations = async (req, res, next) => {
  try {
    const evaluations = await Evaluation.findAll();
    return res.status(200).json(evaluations);
  } catch (error) {
    next(error);
  }
}

export const getEvaluation = async (req, res, next) => {
  const { id } = req.params;
  const evaluation = await Evaluation.findOne({ where: { id } });
  if (!evaluation) {
    return res.status(404).json({ message: "Evaluation not found" });
  }
  return res.json(evaluation);
}

export const createEvaluation = async (req, res, next) => {
  try {
    const { name, description, startDate, endDate, idArea } = req.body;
    const newEvaluation = await Evaluation.create({
      name,
      description,
      startDate,
      endDate,
      idArea,
    });
    return res.status(201).json(newEvaluation);
  } catch (error) {
    next(error);
  }
}

export const updateEvaluation = async (req, res, next) => {
  const { id } = req.params;
  const evaluation = await Evaluation.findOne({ where: { id } });
  
  if (!evaluation) {
    return res.status(404).json({ message: "Evaluation not found" });
  }

  evaluation.set(req.body);
  await evaluation.save();
  return res.json(evaluation);
}

export const deleteEvaluation = async (req, res, next) => {
  const { id } = req.params;
  const evaluation = await Evaluation.destroy({ where: { id } });
  if (!evaluation) {
    return res.status(404).json({ message: "Evaluation not found" });
  }
  return res.sendStatus(204);
}