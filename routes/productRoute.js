const express = require("express");
const {
  createProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
} = require("../controller/productController");
const { authMiddleWare, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleWare, isAdmin, createProduct);
router.get("/", getAllProducts);
router.post("/:id", getSingleProduct);
router.put("/wish-list", authMiddleWare, addToWishList);
router.put("/rating", authMiddleWare, rating);
router.put("/:id", authMiddleWare, isAdmin, updateProduct);
router.delete("/:id", authMiddleWare, isAdmin, deleteProduct);

module.exports = router;
