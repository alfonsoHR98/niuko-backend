import Router from "express-promise-router"
import {
  getAddresses,
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress
} from "../../controllers/users/address.controller.js"

const router = Router()

router.get("/Address", getAddresses)
router.get("/Address/:id", getAddress)
router.post("/Address", createAddress)
router.put("/Address/:id", updateAddress)
router.delete("/Address/:id", deleteAddress)

export default router