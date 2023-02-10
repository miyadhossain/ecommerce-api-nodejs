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
  updatePassword,
  forgetPasswordToken,
  resetPassword,
  adminLoginController,
  getAllWishList,
  saveAddress,
  getUserCart,
  addToCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getAllOrders,
  updateOrderStatus,
} = require("../controller/userController");
const { authMiddleWare, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/register", createUser);
router.put("/update-password", authMiddleWare, updatePassword);
router.get("/wishList", authMiddleWare, getAllWishList);
router.get("/cart", authMiddleWare, getUserCart);
router.post("/forget-password-token", forgetPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put(
  "/order/update-order/:id",
  authMiddleWare,
  isAdmin,
  updateOrderStatus
);
router.post("/login", loginUserController);
router.post("/admin-login", adminLoginController);
router.post("/cart", authMiddleWare, addToCart);
router.post("/cart/apply-coupon", authMiddleWare, applyCoupon);
router.post("/cart/cash-order", authMiddleWare, createOrder);
router.get("/all-users", getAllUser);
router.get("/get-orders", authMiddleWare, getAllOrders);
router.get("/refresh-token", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleWare, isAdmin, getSingleUser);
router.delete("/empty-cart", authMiddleWare, emptyCart);
router.delete("/:id", deleteSingleUser);
router.put("/edit-user", authMiddleWare, updateSingleUser);
router.put("/save-address", authMiddleWare, saveAddress);
router.put("/block-user/:id", authMiddleWare, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleWare, isAdmin, unblockUser);

module.exports = router;
