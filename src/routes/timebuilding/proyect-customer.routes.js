import Router from "express-promise-router"
import {
  createProyectCustomer,
  updateProyectCustomer,
  deleteProyectCustomer
} from "../../controllers/timebuilding/proyect-customer.controller.js"

const router = Router()

router.post("/ProyectCustomer", createProyectCustomer)
router.put("/ProyectCustomer/:id", updateProyectCustomer)
router.delete("/ProyectCustomer/:id", deleteProyectCustomer)

export default router