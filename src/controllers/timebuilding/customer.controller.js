import Customer from "../../model/timebuilding/customer.model.js";

export const findAllCustomers = async (req, res, next) => {
  const customers = await Customer.findAll();

  return res.json(customers);
}

export const findOneCustomer = async (req, res, next) => {
  const { id } = req.params;

  const customer = await Customer.findByPk(id);

  if (!customer) {
    return res.status(404).send("Customer not found");
  }

  return res.json(customer);
}

// Create and Save a new Customer
export const createCustomer = async (req, res, next) => {
  const { name, rfc } = req.body;

  try {
    // Busca un cliente existente con el mismo rfc
    const existingCustomer = await Customer.findOne({ where: { rfc } });

    // Si existe un cliente con el mismo rfc, envía un error
    if (existingCustomer) {
      return res.status(400).send("Customer with this RFC already exists");
    }

    // Si no existe un cliente con el mismo rfc, crea uno nuevo
    const customer = await Customer.create({ name, rfc });

    res.status(201).send(customer);
  } catch (error) {
    next(error);
  }
};

// Update a CostCenter by the id in the request
export const updateCustomer = async (req, res, next) => {
  const { id } = req.params;

  const customer = await Customer.findByPk(id);

  if (!customer) {
    return res.status(404).send("Customer not found");
  }

  customer.set(req.body);
  await customer.save();

  return res.json({
    message: "Cliente actualizado",
    data: Customer,
  });
};

// Delete a CostCenter with the specified id in the request
export const deleteCustomer = async (req, res, next) => {
  const { id } = req.params;

  const customer = await Customer.findByPk(id);

  if (!customer) {
    return res.status(404).send("Customer not found");
  }

  const deleteCustomer = await Customer.destroy({ where: { id } });
  
  return res.json({
    message: "Cliente eliminado",
    data: deleteCustomer,
  });
  
};
