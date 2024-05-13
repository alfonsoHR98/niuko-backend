import Router from "express-promise-router"
import {
  findOneService,
  findAllServices,
  createService,
  updateService,
  deleteService,
} from "../../controllers/timebuilding/service.controller.js";

const router = Router()

//Rutas de servicios

router.get("/service", findAllServices);

router.get("/service/:id", findOneService);

router.post("/service", createService);

router.put("/service/:id", updateService);

router.delete("/service/:id", deleteService);

export default router