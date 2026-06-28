import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  const navLinks = [
    { path: "/", label: "Dashboard", icon: "🏠" },
    { path: "/add-doctor", label: "Add Doctor", icon: "👨‍⚕️" },
    { path: "/list-doctors", label: "List Doctors", icon: "👥" },
    { path: "/appointments", label: "Appointments", icon: "📅" },
    { path: "/service-dashboard", label: "Service Dashboard", icon: "⊞" },
    { path: "/add-service", label: "Add Service", icon: "➕" },
    { path: "/list-services", label: "List Services", icon: "☰" },
    { path: "/service-appointments", label: "Service Appointments", icon: "📅" },
  ];

  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Top Navbar */}
      <nav className="bg-emerald-50 px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <div>
            <h1 className="text-xl font-bold text-emerald-700">MediCare</h1>
            <p className="text-emerald-600 text-xs">Healthcare Solutions</p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-1 bg-white rounded-2xl px-4 py-2 shadow-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium transition ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-600 hover:text-emerald-600"
                }`
              }
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-6 py-2 border border-emerald-600 text-emerald-600 rounded-full font-medium hover:bg-emerald-600 hover:text-white transition"
        >
          Logout
        </button>
      </nav>

      {/* Page Content */}
      <div className="px-8 py-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;