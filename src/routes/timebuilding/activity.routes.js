import Router from "express-promise-router";
import {
  createActivity,
  updateActivity,
  deleteActivity,
} from "../../controllers/timebuilding/activity.controller.js";

const router = Router();

router.post("/Activity", createActivity);
router.put("/Activity/:id", updateActivity);
router.delete("/Activity/:id", deleteActivity);

export default router;