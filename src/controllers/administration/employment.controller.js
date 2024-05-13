import Employment from "../../model/administration/employment.model.js";

export const getEmployments = async (req, res, next) => {
  try {
    const employments = await Employment.findAll();
    return res.json(employments);
  } catch (error) {
    next(error);
  }
}

export const createEmployment = async (req, res, next) => {
  const { name, grade, abbreviation } = req.body;

  try {
    const newEmployment = await Employment.create({
      name,
      grade,
      abbreviation,
    });
    return res.json({ message: "Empleado creado", data: newEmployment });
  } catch (error) {
    next(error);
  }
};

export const updateEmployment = async (req, res, next) => {
  const { id } = req.params;
  const employment = await Employment.findOne({ where: { id } });
  
  if (!employment) {
    return res.status(404).json({ message: "Empleado no encontrado" });
  }

  employment.set(req.body);
  await employment.save();
  return res.json({ message: "Empleado actualizado", data: employment });
};

export const deleteEmployment = async (req, res, next) => {
  const { id } = req.params;
  const employment = await Employment.destroy({ where: { id } });
  if (!employment) {
    return res.status(404).json({ message: "Empleado no encontrado" });
  }
  return res.sendStatus(204);
};