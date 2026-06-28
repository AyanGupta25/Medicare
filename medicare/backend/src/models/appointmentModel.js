import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: false,
    },
    doctorName: { type: String },
    doctorSpecialization: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: { type: String, default: "Free" },
    appointmentDate: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: { type: Boolean, default: false },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);