const express = require("express");
const {
  createUser,
  loginUserController,
  getAllUser,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
} = require("../controller/userController");
const { authMiddleWare, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginUserController);
router.get("/all-users", getAllUser);
router.get("/refresh-token", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleWare, isAdmin, getSingleUser);
router.delete("/:id", deleteSingleUser);
router.put("/edit-user", authMiddleWare, updateSingleUser);
router.put("/block-user/:id", authMiddleWare, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleWare, isAdmin, unblockUser);

module.exports = router;
