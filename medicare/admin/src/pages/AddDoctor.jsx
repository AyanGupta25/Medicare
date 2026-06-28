import { useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/apiConfig";

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    specialization: "",
    ticketPrice: "",
    bio: "",
    gender: "male",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosInstance.post("/auth/register", {
        ...formData,
        role: "doctor",
      });
      toast.success("Doctor added successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        specialization: "",
        ticketPrice: "",
        bio: "",
        gender: "male",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add doctor");
    } finally {
      setLoading(false);
    }
  };

  const specializations = [
    "Surgeon", "Neurologist", "Dermatologist", "Cardiologist",
    "Orthopedic", "Pediatrician", "Ophthalmologist", "Gynecologist",
    "Psychiatrist", "Endocrinologist", "Pulmonologist", "Rheumatologist",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Add New Doctor</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Doctor's full name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Doctor's email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Set password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Specialization</label>
            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500"
            >
              <option value="">Select specialization</option>
              {specializations.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Ticket Price ($)</label>
            <input
              type="number"
              name="ticketPrice"
              value={formData.ticketPrice}
              onChange={handleChange}
              placeholder="Consultation fee"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Doctor's bio..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition disabled:opacity-70"
        >
          {loading ? "Adding..." : "Add Doctor"}
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;