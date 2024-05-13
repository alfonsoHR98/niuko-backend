import ProyectUser from "../../model/timebuilding/proyect-user.model.js";

// crear ProyectUser

export const createProyectUser = async (req, res) => {
  const { idProyect, idUser } = req.body;

  try {
    const newProyectUser = await ProyectUser.create({
      idProyect,
      idUser,
    });
    return res.json({ message: "Relacion Proyecto - Usuario creada", data: newProyectUser });
  } catch (error) {
    next(error);
  }
}

// actualizar ProyectUser

export const updateProyectUser = async (req, res) => {
  const { id } = req.params;
  const proyectUser = await ProyectUser.findOne({ where: { id } });

  if (!proyectUser) {
    return res.status(404).json({ message: "Relacion Proyecto - Usuario no encontrada" });
  }

  proyectUser.set(req.body);
  await proyectUser.save();
  return res.json({ message: "Relacion Proyecto - Usuario actualizada", data: proyectUser });
}

// eliminar ProyectUser

export const deleteProyectUser = async (req, res) => {
  const { id } = req.params;
  const proyectUser = await ProyectUser.destroy({ where: { id } });
  if (!proyectUser) {
    return res.status(404).json({ message: "Relacion Proyecto - Usuario no encontrada" });
  }
  return res.sendStatus(204);
}