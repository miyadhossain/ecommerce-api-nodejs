const express = require("express");
const {
  createUser,
  loginUserController,
  getAllUser,
  getSingleUser,
} = require("../controller/userController");
const router = express.Router();
createUser;
router.post("/register", createUser);
router.post("/login", loginUserController);
router.get("/all-users", getAllUser);
router.get("/:id", getSingleUser);

module.exports = router;
