import Doctor from "../models/doctorModel.js";
import Appointment from "../models/appointmentModel.js";

// @desc    Get all doctors
// @route   GET /api/doctors
// @access  Public
export const getAllDoctors = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select("-password");
    }

    res.status(200).json({
      success: true,
      message: "Doctors found",
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single doctor
// @route   GET /api/doctors/:id
// @access  Public
export const getSingleDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id)
      .populate("reviews")
      .select("-password");

    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }

    res.status(200).json({
      success: true,
      message: "Doctor found",
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update doctor
// @route   PUT /api/doctors/:id
// @access  Private (doctor only)
export const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Doctor updated successfully",
      data: updatedDoctor,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete doctor
// @route   DELETE /api/doctors/:id
// @access  Private (admin only)
export const deleteDoctor = async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get doctor profile
// @route   GET /api/doctors/profile/me
// @access  Private (doctor only)
export const getDoctorProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.user._id)
      .populate("appointments")
      .select("-password");

    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }

    res.status(200).json({
      success: true,
      message: "Profile found",
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};