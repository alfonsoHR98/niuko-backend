import Router from "express-promise-router"
import {
  createProyectManager,
  updateProyectManager,
  deleteProyectManager
} from "../../controllers/timebuilding/proyect-manager.controller.js"

const router = Router()

router.post("/ProyectManager", createProyectManager)
router.put("/ProyectManager/:id", updateProyectManager)
router.delete("/ProyectManager/:id", deleteProyectManager)

export default router