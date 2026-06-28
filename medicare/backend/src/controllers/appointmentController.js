import Appointment from "../models/appointmentModel.js";
import User from "../models/userModel.js";

export const bookAppointment = async (req, res) => {
  try {
    const {
      appointmentDate,
      timeSlot,
      ticketPrice,
      notes,
      doctorName,
      doctorSpecialization,
    } = req.body;

    const appointment = await Appointment.create({
      doctorName,
      doctorSpecialization,
      user: req.user._id,
      ticketPrice: ticketPrice || "Free",
      appointmentDate,
      timeSlot,
      notes,
    });

    await User.findByIdAndUpdate(req.user._id, {
      $push: { appointments: appointment._id },
    });

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({}).populate(
      "user",
      "name email phone"
    );
    res.status(200).json({
      success: true,
      message: "Appointments found",
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSingleAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!appointment) {
      return res
        .status(404)
        .json({ success: false, message: "Appointment not found" });
    }
    res.status(200).json({
      success: true,
      message: "Appointment found",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Appointment updated successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ user: req.user._id });
    res.status(200).json({
      success: true,
      message: "Appointments found",
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};