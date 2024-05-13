import Area from "../../model/administration/area.model.js";

export const getAreas = async (req, res, next) => {
  const areas = await Area.findAll();
  return res.json(areas);
};

export const createArea = async (req, res, next) => {
  const { name, abreviation } = req.body;

  try {
    const newArea = await Area.create({
      name,
      abreviation,
    });
    return res.json({ message: "Area creada", data: newArea });
  } catch (error) {
    next(error);
  }
};

export const updateArea = async (req, res, next) => {
  const { id } = req.params;
  const area = await Area.findOne({ where: { id } });

  if (!area) {
    return res.status(404).json({ message: "Area no encontrada" });
  }

  area.set(req.body);
  await area.save();
  return res.json({ message: "Area actualizada", data: area });
};

export const deleteArea = async (req, res, next) => {
  const { id } = req.params;
  const area = await Area.destroy({ where: { id } });
  if (!area) {
    return res.status(404).json({ message: "Area no encontrada" });
  }
  return res.sendStatus(204);
};
