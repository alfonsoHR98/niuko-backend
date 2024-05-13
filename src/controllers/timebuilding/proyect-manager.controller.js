import ProyectManager from "../../model/timebuilding/proyect-manager.model.js";

// crear ProyectManager

export const createProyectManager = async (req, res) => {
  const { idProyect, idManager } = req.body;

  try {
    const newProyectManager = await ProyectManager.create({
      idProyect,
      idManager,
    });
    return res.json({ message: "Relacion Proyecto - Manager creada", data: newProyectManager });
  } catch (error) {
    next(error);
  }
}

// actualizar ProyectManager

export const updateProyectManager = async (req, res) => {
  const { id } = req.params;
  const proyectManager = await ProyectManager.findOne({ where: { id } });

  if (!proyectManager) {
    return res.status(404).json({ message: "Relacion Proyecto - Manager no encontrada" });
  }

  proyectManager.set(req.body);
  await proyectManager.save();
  return res.json({ message: "Relacion Proyecto - Manager actualizada", data: proyectManager });
}

// eliminar ProyectManager

export const deleteProyectManager = async (req, res) => {
  const { id } = req.params;
  const proyectManager = await ProyectManager.destroy({ where: { id } });
  if (!proyectManager) {
    return res.status(404).json({ message: "Relacion Proyecto - Manager no encontrada" });
  }
  return res.sendStatus(204);
}