import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const initialAppointments = [
  { id: 1, patient: "John Doe", service: "Blood Pressure Check", date: "2026-07-15", time: "10:00 AM", price: "₹200", status: "pending" },
  { id: 2, patient: "Jane Smith", service: "Blood Sugar Test", date: "2026-07-16", time: "11:00 AM", price: "₹300", status: "pending" },
  { id: 3, patient: "Mike Johnson", service: "X-Ray Scan", date: "2026-07-17", time: "02:00 PM", price: "₹800", status: "approved" },
  { id: 4, patient: "Sarah Williams", service: "Full Blood Count", date: "2026-07-18", time: "03:00 PM", price: "₹500", status: "cancelled" },
  { id: 5, patient: "David Brown", service: "ECG", date: "2026-07-19", time: "09:00 AM", price: "₹400", status: "pending" },
];

const ServiceAppointments = () => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleStatus = (id, status) => {
    setAppointments(appointments.map((apt) =>
      apt.id === id ? { ...apt, status } : apt
    ));
    toast.success(`Appointment ${status}!`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Service Appointments ({appointments.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-4 px-4 text-gray-500 font-medium">#</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Patient</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Service</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Date</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Time</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Price</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Status</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((apt, i) => (
              <tr key={apt.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                <td className="py-4 px-4 text-gray-500">{i + 1}</td>
                <td className="py-4 px-4 font-medium text-gray-900">{apt.patient}</td>
                <td className="py-4 px-4 text-gray-600">{apt.service}</td>
                <td className="py-4 px-4 text-gray-600">{apt.date}</td>
                <td className="py-4 px-4 text-gray-600">{apt.time}</td>
                <td className="py-4 px-4 text-emerald-600 font-medium">{apt.price}</td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                    apt.status === "approved" ? "bg-green-100 text-green-600" :
                    apt.status === "cancelled" ? "bg-red-100 text-red-600" :
                    "bg-yellow-100 text-yellow-600"
                  }`}>
                    {apt.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    {apt.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleStatus(apt.id, "approved")}
                          className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center hover:bg-green-200 transition"
                        >
                          <FaCheck size={12} />
                        </button>
                        <button
                          onClick={() => handleStatus(apt.id, "cancelled")}
                          className="w-8 h-8 bg-red-100 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-200 transition"
                        >
                          <FaTimes size={12} />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceAppointments;