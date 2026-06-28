import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuthStore from "../../store/authStore";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, token, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold text-emerald-600">
              Medi<span className="text-gray-800">Care</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-emerald-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className="text-gray-600 hover:text-emerald-600 font-medium transition"
            >
              Find Doctors
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-emerald-600 font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {token ? (
              <div className="flex items-center gap-4">
                <Link to="/my-account">
                  <img
                    src={user?.photo || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500"
                  />
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-50 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-emerald-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className="text-gray-600 hover:text-emerald-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Find Doctors
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-emerald-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            {token ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-emerald-600 border border-emerald-600 rounded-lg text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;