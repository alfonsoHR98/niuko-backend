import Router from "express-promise-router"
import {
  createEvaluationManagerUser,
  updateEvaluationManagerUser,
  deleteEvaluationManagerUser,
} from "../../controllers/evaluation/evaluation-manager-user.controller.js";

const router = Router()

router.post("/evaluation-manager-user", createEvaluationManagerUser)
router.put("/evaluation-manager-user/:id", updateEvaluationManagerUser)
router.delete("/evaluation-manager-user/:id", deleteEvaluationManagerUser)

export default router