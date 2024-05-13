import Router from "express-promise-router"
import {
  getOffices,
  createOffice,
  updateOffice,
  deleteOffice
} from "../../controllers/administration/office.controller.js"

const router = Router()

router.get("/Office", getOffices)
router.post("/Office", createOffice);
router.put("/Office/:id", updateOffice);
router.delete("/Office/:id", deleteOffice);

export default router