import Router from "express-promise-router"
import {
  getAreas, 
  createArea,
  updateArea,
  deleteArea
} from "../../controllers/administration/area.controller.js"

const router = Router()

router.get("/Area", getAreas)
router.post("/Area", createArea);
router.put("/Area/:id", updateArea);
router.delete("/Area/:id", deleteArea);

export default router