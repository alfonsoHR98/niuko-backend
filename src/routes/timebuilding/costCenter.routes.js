import Router from "express-promise-router"
import {
  findAllCostCenters,
  createCostCenter,
  updateCostCenter,
  deleteCostCenter,
} from "../../controllers/timebuilding/costCenter.controller.js";

const router = Router()

//Rutas de centros de costos

router.get("/costCenter", findAllCostCenters);

router.post("/costCenter", createCostCenter);

router.put("/costCenter/:id", updateCostCenter);

router.delete("/costCenter/:id", deleteCostCenter);

export default router