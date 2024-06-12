import Insurance from "../../model/users/insurance.model.js";

export const getInsurances = async (req, res, next) => {
  try {
    const insurances = await Insurance.findAll();
    return res.json(insurances);
  } catch (error) {
    next(error);
  }
};

export const getInsurance = async (req, res, next) => {
  const { id } = req.params;

  try {
    const insurance = await Insurance.findByPk(id);

    if (!insurance) {
      return res.status(404).json({ message: "Dirección no encontrada" });
    }

    return res.json(insurance);
  } catch (error) {
    next(error);
  }
};

export const createInsurance = async (req, res, next) => {
  const { num, beneficiary } = req.body;

  // Si no existe un registro con el mismo num, crea uno nuevo
  const insurance = await Insurance.create({ num, beneficiary });

  // Envía el nuevo registro como respuesta
  res.json(insurance);
};

export const updateInsurance = async (req, res, next) => {
  const { id } = req.params;
  const insurance = await Insurance.findOne({ where: { id } });

  if (!insurance) {
    return res.status(404).json({ message: "Dirección no encontrada" });
  }

  insurance.set(req.body);
  await insurance.save();
  return res.json({ message: "Dirección actualizada", data: insurance });
};

export const deleteInsurance = async (req, res, next) => {
  const { id } = req.params;
  const insurance = await Insurance.destroy({ where: { id } });
  if (!insurance) {
    return res.status(404).json({ message: "Dirección no encontrada" });
  }
  return res.sendStatus(204);
};
