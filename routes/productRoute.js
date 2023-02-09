const express = require("express");
const {
  createProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
  uploadProductImages,
} = require("../controller/productController");
const { authMiddleWare, isAdmin } = require("../middlewares/authMiddleware");
const {
  uploadImage,
  productImageResize,
} = require("../middlewares/uploadImages");
const router = express.Router();

router.post("/", authMiddleWare, isAdmin, createProduct);
router.put(
  "/upload-images/:id",
  authMiddleWare,
  isAdmin,
  uploadImage.array("images", 10),
  productImageResize,
  uploadProductImages
);
router.get("/", getAllProducts);
router.post("/:id", getSingleProduct);
router.put("/wish-list", authMiddleWare, addToWishList);
router.put("/rating", authMiddleWare, rating);
router.put("/:id", authMiddleWare, isAdmin, updateProduct);
router.delete("/:id", authMiddleWare, isAdmin, deleteProduct);

module.exports = router;
