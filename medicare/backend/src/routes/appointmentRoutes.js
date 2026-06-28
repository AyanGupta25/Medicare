import express from "express";
import {
  bookAppointment,
  getAllAppointments,
  getSingleAppointment,
  updateAppointment,
  deleteAppointment,
  getMyAppointments,
} from "../controllers/appointmentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, bookAppointment);
router.get("/", protect, getAllAppointments);
router.get("/my-appointments", protect, getMyAppointments);
router.get("/:id", protect, getSingleAppointment);
router.put("/:id", protect, updateAppointment);
router.delete("/:id", protect, deleteAppointment);

export default router;