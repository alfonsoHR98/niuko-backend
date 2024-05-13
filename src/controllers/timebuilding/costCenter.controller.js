import CostCenter from "../../model/timebuilding/costCenter.model.js";

// Get all cost centers

export const findAllCostCenters = async (req, res) => {
  try {
    const costCenters = await CostCenter.findAll();
    res.json(costCenters);
  } catch (error) {
    next(error);
  }
};

// Create a new cost center

export const createCostCenter = async (req, res, next) => {
  try {
    const { name, costCenterKey } = req.body;

    const existingCostCenter = await CostCenter.findOne({
      where: { costCenterKey },
    });

    if (existingCostCenter) {
      return res
        .status(400)
        .json({ message: "Cost Center with this key already exists" });
    }

    const newCostCenter = await CostCenter.create({ name, costCenterKey });
    res.json(newCostCenter);
  } catch (error) {
    next(error);
  }
};

// Update a cost center

export const updateCostCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const costCenter = await CostCenter.findByPk(id);

    if (!costCenter) {
      return res.status(404).json({ message: "Cost center not found" });
    }

    costCenter.set(req.body);
    await costCenter.save();

    res.json({
      message: "Cost center updated",
      data: costCenter,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a cost center

export const deleteCostCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const costCenter = await CostCenter.destroy({ where: { id } });
    if (!costCenter) {
      return res.status(404).json({ message: "Cost center not found" });
    }
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
