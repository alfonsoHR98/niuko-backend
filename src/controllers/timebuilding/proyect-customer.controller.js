import ProyectCustomer from "../../model/timebuilding/proyect-customer.model.js";

// crear ProyectCustomer

export const createProyectCustomer = async (req, res) => {
  const { idProyect, idCustomer } = req.body;

  try {
    const newProyectCustomer = await ProyectCustomer.create({
      idProyect,
      idCustomer,
    });
    return res.json({ message: "Relacion Proyecto - Cliente creada", data: newProyectCustomer });
  } catch (error) {
    next(error);
  }
}

// actualizar ProyectCustomer

export const updateProyectCustomer = async (req, res) => {
  const { id } = req.params;
  const proyectCustomer = await ProyectCustomer.findOne({ where: { id } });

  if (!proyectCustomer) {
    return res.status(404).json({ message: "Relacion Proyecto - Cliente no encontrada" });
  }

  proyectCustomer.set(req.body);
  await proyectCustomer.save();
  return res.json({ message: "Relacion Proyecto - Cliente actualizada", data: proyectCustomer });
}

// eliminar ProyectCustomer

export const deleteProyectCustomer = async (req, res) => {
  const { id } = req.params;
  const proyectCustomer = await ProyectCustomer.destroy({ where: { id } });
  if (!proyectCustomer) {
    return res.status(404).json({ message: "Relacion Proyecto - Cliente no encontrada" });
  }
  return res.sendStatus(204);
}