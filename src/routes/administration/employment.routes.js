import Router from "express-promise-router"
import {
  getEmployments,
  createEmployment,
  updateEmployment,
  deleteEmployment
} from "../../controllers/administration/employment.controller.js"

const router = Router();

router.get("/Employment", getEmployments);
router.post("/Employment", createEmployment);
router.put("/Employment/:id", updateEmployment);
router.delete("/Employment/:id", deleteEmployment);

export default router;