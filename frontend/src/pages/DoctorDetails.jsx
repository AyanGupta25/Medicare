import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { FaStar, FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import { doctors } from "../assets/data/doctors";
import { axiosInstance } from "../utils/apiConfig";
import { toast } from "react-toastify";
import useAuthStore from "../store/authStore";

const DoctorDetails = () => {
  const { id } = useParams();
  const { token, user } = useAuthStore();
  const [doctor, setDoctor] = useState(null);
  const [tab, setTab] = useState("overview");
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  useEffect(() => {
    // Find doctor from local data first
    const found = doctors.find((d) => d.id === id);
    if (found) setDoctor(found);
  }, [id]);

const handleBooking = async () => {
  if (!token) {
    toast.error("Please login to book an appointment");
    return;
  }
  if (!appointmentDate || !timeSlot) {
    toast.error("Please select date and time slot");
    return;
  }
  try {
    const res = await axiosInstance.post("/appointments", {
      doctorName: doctor?.name || "Unknown Doctor",
      doctorSpecialization: doctor?.specialization || "General",
      appointmentDate: appointmentDate,
      timeSlot: timeSlot,
      ticketPrice: "Free",
      notes: "",
    });
    if (res.data.success) {
      toast.success("Appointment booked successfully!");
      setAppointmentDate("");
      setTimeSlot("");
    }
  } catch (error) {
    console.log("Booking error:", error);
    toast.error(error.response?.data?.message || "Booking failed");
  }
};

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Doctor Profile Header */}
      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Photo */}
            <div className="flex-shrink-0">
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="w-64 h-72 object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium">
                {doctor.specialization}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mt-3 mb-2">
                {doctor.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <FaStar className="text-yellow-400" />
                <span className="text-gray-600">
                  {doctor.avgRating} ({doctor.totalRating} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <FaMapMarkerAlt className="text-emerald-600" />
                <span>{doctor.hospital}</span>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mb-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-emerald-600">
                    {doctor.totalPatients}+
                  </h3>
                  <p className="text-gray-500 text-sm">Patients</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-emerald-600">
                    {doctor.avgRating}
                  </h3>
                  <p className="text-gray-500 text-sm">Rating</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-emerald-600">10+</h3>
                  <p className="text-gray-500 text-sm">Years Exp.</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FaCheck className="text-emerald-600" />
                <span className="text-gray-600 text-sm">
                  Available for appointments
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs + Booking */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left - Tabs */}
            <div className="flex-1">
              {/* Tab Buttons */}
              <div className="flex gap-4 mb-8 border-b border-gray-200">
                {["overview", "reviews"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`pb-3 px-2 font-medium capitalize transition ${
                      tab === t
                        ? "border-b-2 border-emerald-600 text-emerald-600"
                        : "text-gray-500 hover:text-emerald-600"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Overview Tab */}
              {tab === "overview" && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    About Doctor
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {doctor.name} is a highly experienced {doctor.specialization}{" "}
                    with over 10 years of practice. Known for providing
                    compassionate care and accurate diagnoses, they have helped
                    over {doctor.totalPatients} patients lead healthier lives.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Education
                  </h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                      <div>
                        <p className="font-medium text-gray-800">
                          MBBS - Medical College
                        </p>
                        <p className="text-gray-500 text-sm">2005 - 2011</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                      <div>
                        <p className="font-medium text-gray-800">
                          MD - {doctor.specialization}
                        </p>
                        <p className="text-gray-500 text-sm">2011 - 2014</p>
                      </div>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Experience
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                      <div>
                        <p className="font-medium text-gray-800">
                          {doctor.hospital}
                        </p>
                        <p className="text-gray-500 text-sm">2014 - Present</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {/* Reviews Tab */}
              {tab === "reviews" && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Patient Reviews
                  </h3>

                  {/* Sample Reviews */}
                  <div className="space-y-4 mb-8">
                    {[
                      {
                        name: "John Doe",
                        rating: 5,
                        review: "Excellent doctor! Very professional and caring.",
                      },
                      {
                        name: "Jane Smith",
                        rating: 4,
                        review: "Great experience. Highly recommended.",
                      },
                    ].map((r, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl border border-gray-100"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">
                            {r.name[0]}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{r.name}</p>
                            <div className="flex text-yellow-400 text-sm">
                              {[...Array(r.rating)].map((_, j) => (
                                <FaStar key={j} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{r.review}</p>
                      </div>
                    ))}
                  </div>

                  {/* Add Review */}
                  {token && (
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-4">
                        Write a Review
                      </h4>
                      <div className="flex gap-2 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            className={`cursor-pointer text-xl ${
                              star <= rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            onClick={() => setRating(star)}
                          />
                        ))}
                      </div>
                      <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Write your review..."
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 resize-none mb-4"
                      />
                      <button
                        onClick={() => toast.success("Review submitted!")}
                        className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
                      >
                        Submit Review
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right - Booking Card */}
            <div className="lg:w-80">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Book Appointment
                </h3>
                <p className="text-emerald-600 font-semibold text-lg mb-6">
                  Ticket Price: Free
                </p>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Select Time Slot
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setTimeSlot(slot)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition ${
                          timeSlot === slot
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-emerald-50"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DoctorDetails;