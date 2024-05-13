import Router from "express-promise-router"
import {
  createProyectService,
  updateProyectService,
  deleteProyectService
} from "../../controllers/timebuilding/proyect-service.controller.js"

const router = Router()

router.post("/ProyectService", createProyectService)
router.put("/ProyectService/:id", updateProyectService)
router.delete("/ProyectService/:id", deleteProyectService)

export default router