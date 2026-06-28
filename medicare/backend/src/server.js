import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import User from "./models/userModel.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/doctors/:doctorId/reviews", reviewRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Medicare API is running..." });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const seedData = async () => {
  try {
    const adminExists = await User.findOne({ email: "admin@medicare.com" });
    if (!adminExists) {
      await User.create({
        name: "Admin",
        email: "admin@medicare.com",
        password: "admin123",
        role: "admin",
        gender: "male",
        phone: "8299431275",
      });
      console.log("Admin created: admin@medicare.com / admin123");
    }

    const patientExists = await User.findOne({ email: "patient@medicare.com" });
    if (!patientExists) {
      await User.create({
        name: "Test Patient",
        email: "patient@medicare.com",
        password: "patient123",
        role: "patient",
        gender: "male",
        phone: "9999999999",
      });
      console.log("Patient created: patient@medicare.com / patient123");
    }
  } catch (error) {
    console.log("Seed error:", error.message);
  }
};

const startServer = async () => {
  await connectDB();
  await seedData();

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();