import Router from "express-promise-router";
import {
  createEvaluationReject,
  updateEvaluationResult,
  deleteEvaluationReject
} from "../../controllers/evaluation/evaluation-reject.controller.js";

const router = Router();

router.post("/evaluation-reject", createEvaluationReject);
router.put("/evaluation-reject/:id", updateEvaluationResult);
router.delete("/evaluation-reject/:id", deleteEvaluationReject);

export default router;