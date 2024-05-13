import ProyectArea from "../../model/timebuilding/proyect-area.model.js";

// crear ProyectArea

export const createProyectArea = async (req, res) => {
  const { idProyect, idArea } = req.body;

  try {
    const newProyectArea = await ProyectArea.create({
      idProyect,
      idArea,
    });
    return res.json({ message: "Relacion Proyecto - Area creada", data: newProyectArea });
  } catch (error) {
    next(error);
  }
}

// actualizar ProyectArea

export const updateProyectArea = async (req, res) => {
  const { id } = req.params;
  const proyectArea = await ProyectArea.findOne({ where: { id } });

  if (!proyectArea) {
    return res.status(404).json({ message: "Relacion Proyecto - Area no encontrada" });
  }

  proyectArea.set(req.body);
  await proyectArea.save();
  return res.json({ message: "Relacion Proyecto - Area actualizada", data: proyectArea });
}

// eliminar ProyectArea

export const deleteProyectArea = async (req, res) => {
  const { id } = req.params;
  const proyectArea = await ProyectArea.destroy({ where: { id } });
  if (!proyectArea) {
    return res.status(404).json({ message: "Relacion Proyecto - Area no encontrada" });
  }
  return res.sendStatus(204);
}
