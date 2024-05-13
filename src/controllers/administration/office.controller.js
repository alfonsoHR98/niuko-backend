import Office from "../../model/administration/office.model.js";

// obtener todas las oficinas

export const getOffices = async (req, res, next) => {
  try {
    const offices = await Office.findAll();
    return res.json(offices);
  } catch (error) {
    next(error);
  }
};

export const createOffice = async (req, res, next) => {
  const { name, abreviation } = req.body;

  try {
    const newOffice = await Office.create({
      name,
      abreviation,
    });
    return res.json({ message: "Oficina creada", data: newOffice });
  } catch (error) {
    next(error);
  }
};

export const updateOffice = async (req, res, next) => {
  const { id } = req.params;
  const office = await Office.findOne({ where: { id } });

  if (!office) {
    return res.status(404).json({ message: "Oficina no encontrada" });
  }

  office.set(req.body);
  await office.save();
  return res.json({ message: "Oficina actualizada", data: office });
};

export const deleteOffice = async (req, res, next) => {
  const { id } = req.params;
  const office = await Office.destroy({ where: { id } });
  if (!office) {
    return res.status(404).json({ message: "Oficina no encontrada" });
  }
  return res.sendStatus(204);
};
