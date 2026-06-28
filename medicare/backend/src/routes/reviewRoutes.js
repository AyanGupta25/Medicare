import express from "express";
import {
  getAllReviews,
  createReview,
  deleteReview,
} from "../controllers/reviewController.js";
import { protect, restrict } from "../middleware/authMiddleware.js";

const router = express.Router({ mergeParams: true });

router.get("/", getAllReviews);
router.post("/", protect, restrict("patient"), createReview);
router.delete("/:id", protect, deleteReview);

export default router;