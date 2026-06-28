import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: [true, "Review text is required"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

// Update doctor average rating after review save
reviewSchema.statics.calcAverageRatings = async function (doctorId) {
  const stats = await this.aggregate([
    { $match: { doctor: doctorId } },
    {
      $group: {
        _id: "$doctor",
        numOfRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  await mongoose.model("Doctor").findByIdAndUpdate(doctorId, {
    totalRating: stats[0]?.numOfRating || 0,
    averageRating: stats[0]?.avgRating || 0,
  });
};

reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.doctor);
});

export default mongoose.model("Review", reviewSchema);