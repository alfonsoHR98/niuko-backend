import Router from "express-promise-router";
import {
  createProyectUser,
  updateProyectUser,
  deleteProyectUser,
} from "../../controllers/timebuilding/proyect-user.controller.js";

const router = Router();

router.post("/ProyectUser", createProyectUser);
router.put("/ProyectUser/:id", updateProyectUser);
router.delete("/ProyectUser/:id", deleteProyectUser);

export default router;