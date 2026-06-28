import { FaUserMd, FaUsers, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import logo from "../assets/logo.png";

const Dashboard = () => {
  const stats = [
    { icon: <FaUserMd />, label: "Total Doctors", value: "12", color: "bg-blue-100 text-blue-600" },
    { icon: <FaUsers />, label: "Total Patients", value: "1,234", color: "bg-emerald-100 text-emerald-600" },
    { icon: <FaCalendarAlt />, label: "Appointments", value: "56", color: "bg-purple-100 text-purple-600" },
    { icon: <FaCheckCircle />, label: "Approved", value: "48", color: "bg-yellow-100 text-yellow-600" },
  ];

  const features = [
    {
      title: "Secure Access",
      desc: "Role-based login with protected medical data.",
      bg: "bg-emerald-50",
    },
    {
      title: "Real-time Management",
      desc: "Monitor hospital activity and patient flow.",
      bg: "bg-emerald-50",
    },
    {
      title: "Medical Dashboard",
      desc: "Clean, fast, and doctor-friendly interface.",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <div>
      {/* Welcome Card */}
      <div className="bg-white rounded-3xl shadow-sm p-12 text-center mb-8">
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 object-contain mx-auto mb-6"
        />
        <h1 className="text-4xl font-extrabold text-emerald-900 mb-4 uppercase tracking-wide">
          Welcome to Medicare Admin Panel
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Manage hospital operations, doctors, staff, patient records, and
          system settings from a centralized control panel.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className={`${f.bg} rounded-2xl p-6 text-left`}>
              <h3 className="text-emerald-700 font-bold mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4"
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;