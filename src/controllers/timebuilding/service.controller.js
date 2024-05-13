import Service from "../../model/timebuilding/service.model.js";
import Area from "../../model/administration/area.model.js";

export const findAllServices = async (req, res, next) => {
  const services = await Service.findAll(
    {
      include: [
        {
          model: Area,
          attributes: ['name']
        },
      ],
    }
  );

  return res.json(services);
}

export const findOneService = async (req, res, next) => {
  const { id } = req.params;

  const service = await Service.findByPk(id);

  if (!service) {
    return res.status(404).send("Service not found");
  }

  return res.json(service);
}

// Create and Save a new CostCenter
export const createService = async (req, res, next) => {
  const { title, description, serviceKey, idArea } = req.body;

  try {
    const [service, created] = await Service.findOrCreate({
      where: { serviceKey },
      defaults: { title, description, idArea },
    });

    if (!created) {
      return res.status(400).send("Service with this key already exists");
    }

    res.status(201).send(service);
  } catch (error) {
    next(error);
  }
};

// Update a CostCenter by the id in the request
export const updateService = async (req, res, next) => {
  const { id } = req.params;

  const service = await Service.findByPk(id);

  if (!service) {
    return res.status(404).send("Service not found");
  }

  service.set(req.body);
  await service.save();

  return res.json({
    message: "Service updated",
    data: service,
  });
};

// Delete a CostCenter with the specified id in the request
export const deleteService = async (req, res, next) => {
  const { id } = req.params;
  const service = await Service.destroy({ where: { id } }) 
  if (!service) {
    return res.status(404).send("Service not found");
  }
  return res.sendStatus(204);
};