import Router from "express-promise-router"
import {
  createEvaluationUser,
  updateEvaluationUser,
  deleteEvaluationUser,
} from "../../controllers/evaluation/evaluation-user.controller.js"

const router = Router()

router.post("/evaluation-user", createEvaluationUser)
router.put("/evaluation-user/:id", updateEvaluationUser)
router.delete("/evaluation-user/:id", deleteEvaluationUser)

export default router