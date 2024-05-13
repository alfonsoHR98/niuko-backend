import Router from "express-promise-router"
import {
  createSalary,
  updateSalary,
  deleteSalary
} from "../../controllers/administration/salary.controller.js"

const router = Router()

router.post("/Salary", createSalary);
router.put("/Salary/:id", updateSalary);
router.delete("/Salary/:id", deleteSalary);

export default router
