import Router from "express-promise-router"
import {
  getInsurances,
  getInsurance,
  createInsurance,
  updateInsurance,
  deleteInsurance,
} from "../../controllers/users/insurance.controller.js"

const router = Router()

router.get("/Insurance", getInsurances)
router.get("/Insurance/:id", getInsurance)
router.post("/Insurance", createInsurance)
router.put("/Insurance/:id", updateInsurance)
router.delete("/Insurance/:id", deleteInsurance)

export default router