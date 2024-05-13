import Router from "express-promise-router"
import {
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
  getEvaluations,
  getEvaluation
} from "../../controllers/evaluation/evaluation.controller.js";

const router = Router()

router.get("/evaluation", getEvaluations)
router.get("/evaluation/:id", getEvaluation)
router.post("/evaluation", createEvaluation)
router.put("/evaluation/:id", updateEvaluation)
router.delete("/evaluation/:id", deleteEvaluation)

export default router