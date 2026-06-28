import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import useAuthStore from "../store/authStore";
import { axiosInstance } from "../utils/apiConfig";
import { toast } from "react-toastify";
import { FaUser, FaCalendarAlt, FaEdit, FaSave, FaTrash } from "react-icons/fa";

const MyAccount = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [tab, setTab] = useState("profile");
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [aptLoading, setAptLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    gender: user?.gender || "",
    bloodType: user?.bloodType || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchAppointments = async () => {
    setAptLoading(true);
    try {
      const res = await axiosInstance.get("/appointments/my-appointments");
      setAppointments(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch appointments");
    } finally {
      setAptLoading(false);
    }
  };

  useEffect(() => {
    if (tab === "appointments") {
      fetchAppointments();
    }
  }, [tab]);

  const handleCancelAppointment = async (id) => {
    try {
      await axiosInstance.put(`/appointments/${id}`, { status: "cancelled" });
      toast.success("Appointment cancelled!");
      fetchAppointments();
    } catch (error) {
      toast.error("Failed to cancel appointment");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosInstance.put(`/users/${user._id}`, formData);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar */}
            <div className="lg:w-72">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center mb-4">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUser className="text-emerald-600 text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{user?.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{user?.email}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs font-medium capitalize">
                  {user?.role}
                </span>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setTab("profile")}
                  className={`w-full flex items-center gap-3 px-6 py-4 text-left transition ${
                    tab === "profile"
                      ? "bg-emerald-50 text-emerald-600 border-l-4 border-emerald-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <FaEdit />
                  Edit Profile
                </button>
                <button
                  onClick={() => setTab("appointments")}
                  className={`w-full flex items-center gap-3 px-6 py-4 text-left transition ${
                    tab === "appointments"
                      ? "bg-emerald-50 text-emerald-600 border-l-4 border-emerald-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <FaCalendarAlt />
                  My Appointments
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-6 py-4 text-left text-red-500 hover:bg-red-50 transition"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">

              {/* Profile Tab */}
              {tab === "profile" && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    Profile Information
                  </h2>
                  <form onSubmit={handleUpdate} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Gender</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Blood Type</label>
                        <select
                          name="bloodType"
                          value={formData.bloodType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        >
                          <option value="">Select blood type</option>
                          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition disabled:opacity-70"
                    >
                      <FaSave />
                      {loading ? "Saving..." : "Save Changes"}
                    </button>
                  </form>
                </div>
              )}

              {/* Appointments Tab */}
              {tab === "appointments" && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    My Appointments
                  </h2>
                  {aptLoading ? (
                    <div className="flex items-center justify-center h-40">
                      <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : appointments.length === 0 ? (
                    <div className="text-center py-16">
                      <FaCalendarAlt className="text-gray-300 text-6xl mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">No appointments yet</p>
                      <p className="text-gray-400 text-sm mt-2">
                        Book an appointment with a doctor to see it here
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {appointments.map((apt) => (
                        <div
                          key={apt._id}
                          className="flex items-center justify-between p-5 border border-gray-100 rounded-xl hover:shadow-sm transition"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-2xl">
                              👨‍⚕️
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">
                                {apt.doctorName || "Doctor"}
                              </h4>
                              <p className="text-emerald-600 text-sm">
                                {apt.doctorSpecialization || "Specialist"}
                              </p>
                              <p className="text-gray-500 text-sm mt-1">
                                📅 {new Date(apt.appointmentDate).toLocaleDateString()} at {apt.timeSlot}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                              apt.status === "approved"
                                ? "bg-green-100 text-green-600"
                                : apt.status === "cancelled"
                                ? "bg-red-100 text-red-600"
                                : "bg-yellow-100 text-yellow-600"
                            }`}>
                              {apt.status}
                            </span>
                            {apt.status === "pending" && (
                              <button
                                onClick={() => handleCancelAppointment(apt._id)}
                                className="w-8 h-8 bg-red-100 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-200 transition"
                              >
                                <FaTrash size={12} />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyAccount;