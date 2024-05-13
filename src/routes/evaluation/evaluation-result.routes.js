import Router from "express-promise-router"
import {
  createEvaluationResult,
  updateEvaluationResult,
  deleteEvaluationResult,
  getEvaluationResult,
  getEvaluationResults,
} from "../../controllers/evaluation/evaluation-result.controller.js";

const router = Router()

router.get("/evaluation-result", getEvaluationResults)
router.get("/evaluation-result/:id", getEvaluationResult)
router.post("/evaluation-result", createEvaluationResult)
router.put("/evaluation-result/:id", updateEvaluationResult)
router.delete("/evaluation-result/:id", deleteEvaluationResult)

export default router