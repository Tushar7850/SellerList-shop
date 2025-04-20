const express = require("express");
const {
  registerUser,
  loginUser,
  changePassword,
  deleteUser,
} = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/change-password", protect, changePassword);
router.delete("/delete-user", protect, deleteUser);

module.exports = router;
