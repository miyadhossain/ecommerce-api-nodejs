const express = require("express");
const {
  getAllBrands,
  createBrand,
  updateBrand,
  deleteBrand,
  getSingleBrand,
} = require("../controller/brandController");
const { authMiddleWare, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getAllBrands);
router.post("/", authMiddleWare, isAdmin, createBrand);
router.put("/:id", authMiddleWare, isAdmin, updateBrand);
router.delete("/:id", authMiddleWare, isAdmin, deleteBrand);
router.get("/:id", getSingleBrand);

module.exports = router;
