import ProyectService from "../../model/timebuilding/proyect-service.model.js";

// crear ProyectService

export const createProyectService = async (req, res) => {
  const { idProyect, idService, key } = req.body;

  try {
    const newProyectService = await ProyectService.create({
      idProyect,
      idService,
      key
    });
    return res.json({ message: "Relacion Proyecto - Servicio creada", data: newProyectService });
  } catch (error) {
    next(error);
  }
}

// actualizar ProyectService

export const updateProyectService = async (req, res) => {
  const { id } = req.params;
  const proyectService = await ProyectService.findOne({ where: { id } });

  if (!proyectService) {
    return res.status(404).json({ message: "Relacion Proyecto - Servicio no encontrada" });
  }

  proyectService.set(req.body);
  await proyectService.save();
  return res.json({ message: "Relacion Proyecto - Servicio actualizada", data: proyectService });
}

// eliminar ProyectService

export const deleteProyectService = async (req, res) => {
  const { id } = req.params;
  const proyectService = await ProyectService.destroy({ where: { id } });
  if (!proyectService) {
    return res.status(404).json({ message: "Relacion Proyecto - Servicio no encontrada" });
  }
  return res.sendStatus(204);
}