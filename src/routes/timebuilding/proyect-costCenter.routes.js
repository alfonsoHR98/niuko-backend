import Router from "express-promise-router";
import {
  createProyectCostCenter,
  updateProyectCostCenter,
  deleteProyectCostCenter,
} from "../../controllers/timebuilding/proyect-costCenter.controller.js";

const router = Router();

router.post("/ProyectCostCenter", createProyectCostCenter);
router.put("/ProyectCostCenter/:id", updateProyectCostCenter);
router.delete("/ProyectCostCenter/:id", deleteProyectCostCenter);

export default router;
