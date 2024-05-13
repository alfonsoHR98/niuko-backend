import Router from "express-promise-router"
import {
  createuserAdministration,
  updateuserAdministration,
  deleteuserAdministration
} from "../../controllers/administration/userAdministration.controller.js"

const router = Router()

router.post("/UserAdministration", createuserAdministration)
router.put("/UserAdministration/:id", updateuserAdministration)
router.delete("/UserAdministration/:id", deleteuserAdministration)

export default router