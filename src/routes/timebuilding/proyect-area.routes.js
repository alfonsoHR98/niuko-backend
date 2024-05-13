import Router from "express-promise-router"
import {
  createProyectArea,
  updateProyectArea,
  deleteProyectArea
} from "../../controllers/timebuilding/proyect-area.controller.js"

const router = Router()

router.post("/ProyectArea", createProyectArea)
router.put("/ProyectArea/:id", updateProyectArea)
router.delete("/ProyectArea/:id", deleteProyectArea)

export default router