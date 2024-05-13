import Router from "express-promise-router"
import {
  createProyectHourService,
  updateProyectHourService,
  deleteProyectHourService,
  getProyectHourServiceByIdUser,
  getProyectHourService,
} from "../../controllers/timebuilding/proyect-hour-service.controller.js";

const router = Router()

router.get("/ProyectHourService", getProyectHourService)
router.get("/ProyectHourService/:idUser", getProyectHourServiceByIdUser)
router.post("/ProyectHourService", createProyectHourService)
router.put("/ProyectHourService/:id", updateProyectHourService)
router.delete("/ProyectHourService/:id", deleteProyectHourService)

export default router