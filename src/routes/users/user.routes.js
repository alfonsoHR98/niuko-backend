import Router from "express-promise-router"
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  changePassword,
  signin,
  signout,
  profile
} from "../../controllers/users/user.controller.js";

const router = Router()

//Rutas de usuarios
router.get("/users", getUsers)

router.get("/users/:id", getUser)

router.post("/users", createUser)

router.put("/users/:id", updateUser)

router.delete("/users/:id", deleteUser)

router.put("/users/:id/changePassword", changePassword)

//Rutas de autenticación

router.post("/signin", signin);

router.post("/signout", signout);

router.post("/profile", profile)

export default router