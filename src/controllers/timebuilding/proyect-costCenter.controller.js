import ProyectCostCenter from "../../model/timebuilding/proyect-costCenter.model.js";

// crear ProyectCostCenter

export const createProyectCostCenter = async (req, res) => {
  const { idProyect, idCostCenter } = req.body;

  try {
    const newProyectCostCenter = await ProyectCostCenter.create({
      idProyect,
      idCostCenter,
    });
    return res.json({ message: "Relacion Proyecto - CostCenter creada", data: newProyectCostCenter });
  } catch (error) {
    next(error);
  }
}

// actualizar ProyectCostCenter

export const updateProyectCostCenter = async (req, res) => {
  const { id } = req.params;
  const proyectCostCenter = await ProyectCostCenter.findOne({ where: { id } });

  if (!proyectCostCenter) {
    return res.status(404).json({ message: "Relacion Proyecto - CostCenter no encontrada" });
  }

  proyectCostCenter.set(req.body);
  await proyectCostCenter.save();
  return res.json({ message: "Relacion Proyecto - CostCenter actualizada", data: proyectCostCenter });
}

// eliminar ProyectCostCenter

export const deleteProyectCostCenter = async (req, res) => {
  const { id } = req.params;
  const proyectCostCenter = await ProyectCostCenter.destroy({ where: { id } });
  if (!proyectCostCenter) {
    return res.status(404).json({ message: "Relacion Proyecto - CostCenter no encontrada" });
  }
  return res.sendStatus(204);
}