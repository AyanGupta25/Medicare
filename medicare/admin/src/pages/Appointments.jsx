import { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/apiConfig";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      const res = await axiosInstance.get("/appointments");
      setAppointments(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleStatus = async (id, status) => {
    try {
      await axiosInstance.put(`/appointments/${id}`, { status });
      toast.success(`Appointment ${status}!`);
      fetchAppointments();
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        All Appointments ({appointments.length})
      </h2>
      {appointments.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-xl">No appointments yet</p>
          <p className="text-gray-400 text-sm mt-2">
            Appointments booked from frontend will appear here
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-4 px-4 text-gray-500 font-medium">#</th>
                <th className="text-left py-4 px-4 text-gray-500 font-medium">Patient</th>
                <th className="text-left py-4 px-4 text-gray-500 font-medium">Doctor</th>
                <th className="text-left py-4 px-4 text-gray-500 font-medium">Specialization</th>
                <th className="text-left py-4 px-4 text-gray-500 font-medium">Date</th>
                <th className="text-left py-4 px-4 text-gray-500 font-medium">Time</th>
                <th className="text-left py-4 px-4 text-gray-500 font-medium">Status</th>
                <th className="text-left py-4 px-4 text-gray-500 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt, i) => (
                <tr
                  key={apt._id}
                  className="border-b border-gray-50 hover:bg-gray-50 transition"
                >
                  <td className="py-4 px-4 text-gray-500">{i + 1}</td>
                  <td className="py-4 px-4 font-medium text-gray-900">
                    {apt.user?.name || "Unknown"}
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {apt.doctorName || "Unknown"}
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm">
                      {apt.doctorSpecialization || "N/A"}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {new Date(apt.appointmentDate).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4 text-gray-600">{apt.timeSlot}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                        apt.status === "approved"
                          ? "bg-green-100 text-green-600"
                          : apt.status === "cancelled"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {apt.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      {apt.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleStatus(apt._id, "approved")}
                            className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center hover:bg-green-200 transition"
                          >
                            <FaCheck size={12} />
                          </button>
                          <button
                            onClick={() => handleStatus(apt._id, "cancelled")}
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
      )}
    </div>
  );
};

export default Appointments;