import ProyectOffice from "../../model/timebuilding/proyect-office.model.js";

// crear ProyectOffice

export const createProyectOffice = async (req, res) => {
  const { idProyect, idOffice } = req.body;

  try {
    const newProyectOffice = await ProyectOffice.create({
      idProyect,
      idOffice,
    });
    return res.json({ message: "Relacion Proyecto - Oficina creada", data: newProyectOffice });
  } catch (error) {
    next(error);
  }
}

// actualizar ProyectOffice

export const updateProyectOffice = async (req, res) => {
  const { id } = req.params;
  const proyectOffice = await ProyectOffice.findOne({ where: { id } });

  if (!proyectOffice) {
    return res.status(404).json({ message: "Relacion Proyecto - Oficina no encontrada" });
  }

  proyectOffice.set(req.body);
  await proyectOffice.save();
  return res.json({ message: "Relacion Proyecto - Oficina actualizada", data: proyectOffice });
}

// eliminar ProyectOffice

export const deleteProyectOffice = async (req, res) => {
  const { id } = req.params;
  const proyectOffice = await ProyectOffice.destroy({ where: { id } });
  if (!proyectOffice) {
    return res.status(404).json({ message: "Relacion Proyecto - Oficina no encontrada" });
  }
  return res.sendStatus(204);
}