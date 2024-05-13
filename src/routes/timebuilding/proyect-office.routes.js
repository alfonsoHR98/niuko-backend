import Router from "express-promise-router"
import {
  createProyectOffice,
  updateProyectOffice,
  deleteProyectOffice
} from "../../controllers/timebuilding/proyect-office.controller.js"

const router = Router()

router.post("/ProyectOffice", createProyectOffice)
router.put("/ProyectOffice/:id", updateProyectOffice)
router.delete("/ProyectOffice/:id", deleteProyectOffice)

export default router