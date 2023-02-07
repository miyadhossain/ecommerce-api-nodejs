const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getSingleCategory,
  getAllCategory,
  getAllCategories,
} = require("../controller/categoryController");
const { authMiddleWare, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getAllCategories);
router.post("/", authMiddleWare, isAdmin, createCategory);
router.put("/:id", authMiddleWare, isAdmin, updateCategory);
router.delete("/:id", authMiddleWare, isAdmin, deleteCategory);
router.get("/:id", getSingleCategory);

module.exports = router;
