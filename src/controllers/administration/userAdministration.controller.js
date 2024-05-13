import userAdministration from "../../model/administration/userAdministration.model.js";

export const createuserAdministration = async (req, res, next) => {
  const {
    dateAdmision,
    dateDeparture,
    contract,
    idOffice,
    idArea,
    idSalary,
    idEmployment,
  } = req.body;
  try {
    const newuserAdministration = await userAdministration.create({
      dateAdmision,
      dateDeparture,
      contract,
      idOffice,
      idArea,
      idSalary,
      idEmployment,
    });
    return res.json({ message: "Usuario creado", data: newuserAdministration });
  } catch (error) {
    next(error);
  }
};

export const updateuserAdministration = async (req, res, next) => {
  const { id } = req.params;
  const userAdministration = await userAdministration.findOne({
    where: { id },
  });

  if (!userAdministration) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  userAdministration.set(req.body);
  await userAdministration.save();
  return res.json({ message: "Usuario actualizado", data: userAdministration });
};

export const deleteuserAdministration = async (req, res, next) => {
  const { id } = req.params;
  const userAdministration = await userAdministration.destroy({
    where: { id },
  });
  if (!userAdministration) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }
  return res.sendStatus(204);
};
