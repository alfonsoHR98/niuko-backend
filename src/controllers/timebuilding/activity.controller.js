import Activity from "../../model/timebuilding/activity.model.js";

// crear Activity

export const createActivity = async (req, res) => {
  const { name, description, idService } = req.body;

  try {
    const newActivity = await Activity.create({
      name,
      description,
      idService,
    });
    return res.json({ message: "Actividad creada", data: newActivity });
  } catch (error) {
    next(error);
  }
}

// actualizar Activity

export const updateActivity = async (req, res) => {
  const { id } = req.params;
  const activity = await Activity.findOne({ where: { id } });

  if (!activity) {
    return res.status(404).json({ message: "Actividad no encontrada" });
  }

  activity.set(req.body);
  await activity.save();
  return res.json({ message: "Actividad actualizada", data: activity });
}

// eliminar Activity

export const deleteActivity = async (req, res) => {
  const { id } = req.params;
  const activity = await Activity.destroy({ where: { id } });
  if (!activity) {
    return res.status(404).json({ message: "Actividad no encontrada" });
  }
  return res.sendStatus(204);
}

