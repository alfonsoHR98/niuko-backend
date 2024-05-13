import Salary from "../../model/administration/salary.model.js";

export const createSalary = async (req, res, next) => {
  const { dailySalary, baseSalary, baseSalaryIMSS, integratedSalary } =
    req.body;

  try {
    const newSalary = await Salary.create({
      dailySalary,
      baseSalary,
      baseSalaryIMSS,
      integratedSalary,
    });
    return res.json(newSalary);
  } catch (error) {
    next(error);
  }
};

export const updateSalary = async (req, res, next) => {
  const { id } = req.params;
  const salary = await Salary.findOne({ where: { id } });

  if (!salary) {
    return res.status(404).json({ message: "Salario no encontrado" });
  }

  salary.set(req.body);
  await salary.save();
  return res.json({ message: "Salario actualizado", data: salary });
};

export const deleteSalary = async (req, res, next) => {
  const { id } = req.params;
  const salary = await Salary.destroy({ where: { id } });
  if (!salary) {
    return res.status(404).json({ message: "Salario no encontrado" });
  }
  return res.sendStatus(204);
};
