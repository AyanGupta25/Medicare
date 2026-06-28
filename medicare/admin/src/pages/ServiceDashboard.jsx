import { FaStethoscope, FaCalendarCheck, FaUsers, FaStar } from "react-icons/fa";

const ServiceDashboard = () => {
  const stats = [
    { icon: <FaStethoscope />, label: "Total Services", value: "8", color: "bg-blue-100 text-blue-600" },
    { icon: <FaCalendarCheck />, label: "Service Bookings", value: "124", color: "bg-emerald-100 text-emerald-600" },
    { icon: <FaUsers />, label: "Active Patients", value: "89", color: "bg-purple-100 text-purple-600" },
    { icon: <FaStar />, label: "Avg Rating", value: "4.8", color: "bg-yellow-100 text-yellow-600" },
  ];

  const recentBookings = [
    { id: 1, patient: "John Doe", service: "Blood Pressure Check", date: "2026-07-15", status: "pending" },
    { id: 2, patient: "Jane Smith", service: "Blood Sugar Test", date: "2026-07-16", status: "approved" },
    { id: 3, patient: "Mike Johnson", service: "X-Ray Scan", date: "2026-07-17", status: "approved" },
    { id: 4, patient: "Sarah Williams", service: "Full Blood Count", date: "2026-07-18", status: "cancelled" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Service Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4">
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

      {/* Recent Bookings */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Service Bookings</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-4 px-4 text-gray-500 font-medium">#</th>
                <th className="text-left py-4 px-4 text-gray-500 font-medium">Patient</th>
                <th className="text-left py-4 px-4 text-gray-500 font-medium">Service</th>
                <th className="text-left py-4 px-4 text-gray-500 font-medium">Date</th>
                <th className="text-left py-4 px-4 text-gray-500 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking, i) => (
                <tr key={booking.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="py-4 px-4 text-gray-500">{i + 1}</td>
                  <td className="py-4 px-4 font-medium text-gray-900">{booking.patient}</td>
                  <td className="py-4 px-4 text-gray-600">{booking.service}</td>
                  <td className="py-4 px-4 text-gray-600">{booking.date}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                      booking.status === "approved" ? "bg-green-100 text-green-600" :
                      booking.status === "cancelled" ? "bg-red-100 text-red-600" :
                      "bg-yellow-100 text-yellow-600"
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceDashboard;