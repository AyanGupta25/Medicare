import express from "express";
import {
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
  getDoctorProfile,
} from "../controllers/doctorController.js";
import { protect, restrict } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllDoctors);
router.get("/:id", getSingleDoctor);
router.put("/:id", protect, restrict("doctor", "admin"), updateDoctor);
router.delete("/:id", protect, restrict("admin"), deleteDoctor);
router.get("/profile/me", protect, restrict("doctor"), getDoctorProfile);

export default router;