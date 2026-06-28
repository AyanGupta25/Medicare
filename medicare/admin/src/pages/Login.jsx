import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/apiConfig";
import logo from "../assets/logo.png";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await axiosInstance.post("/auth/login", formData);
    const { token, data } = res.data;
    localStorage.setItem("adminToken", token);
    localStorage.setItem("adminUser", JSON.stringify(data));
    toast.success("Login successful!");
    navigate("/");
  } catch (error) {
    toast.error(error.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src={logo}
            alt="logo"
            className="w-20 h-20 object-contain mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900">
            Medicare Admin Panel
          </h1>
          <p className="text-gray-500 mt-2">Login to manage your hospital</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter admin email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;