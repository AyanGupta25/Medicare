import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    phone: {
      type: String,
    },
    photo: {
      type: String,
      default: "https://i.ibb.co/MBtjqXQ/no-avatar.gif",
    },
    ticketPrice: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      default: "doctor",
    },
    specialization: {
      type: String,
    },
    qualifications: [
      {
        startingDate: String,
        endingDate: String,
        degree: String,
        university: String,
      },
    ],
    experiences: [
      {
        startingDate: String,
        endingDate: String,
        position: String,
        hospital: String,
      },
    ],
    bio: {
      type: String,
      maxlength: 500,
    },
    about: {
      type: String,
    },
    timeSlots: [
      {
        day: String,
        startingTime: String,
        endingTime: String,
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    averageRating: {
      type: Number,
      default: 0,
    },
    totalRating: {
      type: Number,
      default: 0,
    },
    isApproved: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
      },
    ],
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);