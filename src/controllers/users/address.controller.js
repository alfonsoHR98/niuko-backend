import Address from "../../model/users/address.model.js";

export const getAddresses = async (req, res, next) => {
  try {
    const addresses = await Address.findAll();
    return res.json({ data: addresses });
  } catch (error) {
    next(error);
  }
}

export const getAddress = async (req, res, next) => {
  const { id } = req.params;

  try {
    const address = await Address.findByPk(id);

    if (!address) {
      return res.status(404).json({ message: "Dirección no encontrada" });
    }

    return res.json({ data: address });
  } catch (error) {
    next(error);
  }
};

export const createAddress = async (req, res, next) => {
  const { street, internalNumber, externalNumber, suburb, cp } = req.body;

  try {
    const newAddress = await Address.create({
      street,
      internalNumber,
      externalNumber,
      suburb,
      cp,
    });
    return res.json({ message: "Dirección creada", data: newAddress });
  } catch (error) {
    next(error);
  }
};

export const updateAddress = async (req, res, next) => {
  const { id } = req.params;
  const address = await Address.findOne({ where: { id } });

  if (!address) {
    return res.status(404).json({ message: "Dirección no encontrada" });
  }

  address.set(req.body);
  await address.save();
  return res.json({ message: "Dirección actualizada", data: address });
};

export const deleteAddress = async (req, res, next) => {
  const { id } = req.params;
  const address = await Address.destroy({ where: { id } });
  if (!address) {
    return res.status(404).json({ message: "Dirección no encontrada" });
  }
  return res.sendStatus(204);
};
