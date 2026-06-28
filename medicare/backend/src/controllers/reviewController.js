import Review from "../models/reviewModel.js";
import Doctor from "../models/doctorModel.js";

// @desc    Get all reviews
// @route   GET /api/doctors/:doctorId/reviews
// @access  Public
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ doctor: req.params.doctorId }).populate(
      "user",
      "name photo"
    );

    res.status(200).json({
      success: true,
      message: "Reviews found",
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create review
// @route   POST /api/doctors/:doctorId/reviews
// @access  Private (patient only)
export const createReview = async (req, res) => {
  try {
    const { reviewText, rating } = req.body;

    const doctor = await Doctor.findById(req.params.doctorId);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    // Check if user already reviewed
    const alreadyReviewed = await Review.findOne({
      doctor: req.params.doctorId,
      user: req.user._id,
    });

    if (alreadyReviewed) {
      return res
        .status(400)
        .json({ success: false, message: "You already reviewed this doctor" });
    }

    const review = await Review.create({
      doctor: req.params.doctorId,
      user: req.user._id,
      reviewText,
      rating,
    });

    // Add review to doctor
    await Doctor.findByIdAndUpdate(req.params.doctorId, {
      $push: { reviews: review._id },
    });

    res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      data: review,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete review
// @route   DELETE /api/doctors/:doctorId/reviews/:id
// @access  Private
export const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};