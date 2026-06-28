import express from "express";
import {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  getUserProfile,
} from "../controllers/userController.js";
import { protect, restrict } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, restrict("admin"), getAllUsers);
router.get("/:id", protect, getSingleUser);
router.put("/:id", protect, updateUser);
router.delete("/:id", protect, restrict("admin"), deleteUser);
router.get("/profile/me", protect, getUserProfile);

export default router;