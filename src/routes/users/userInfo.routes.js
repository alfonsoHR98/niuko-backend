import Router from "express-promise-router";
import {
  createUserInfo,
  updateUserInfo,
  deleteUserInfo,
} from "../../controllers/users/userInfo.controller.js";

const router = Router();

router.post("/UserInfo", createUserInfo);
router.put("/UserInfo/:id", updateUserInfo);
router.delete("/UserInfo/:id", deleteUserInfo);

export default router;
