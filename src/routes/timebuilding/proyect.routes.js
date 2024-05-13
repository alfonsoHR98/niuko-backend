import Router from "express-promise-router"
import {
  getProyects,
  getProyectById,
  createProyect,
  updateProyect,
  deleteProyect,
} from "../../controllers/timebuilding/proyect.controller.js"

const router = Router()

router.get("/proyects", getProyects)

router.get("/proyects/:id", getProyectById);

router.post("/proyects", createProyect);

router.put("/proyects/:id", updateProyect);

router.delete("/proyects/:id", deleteProyect);

export default router