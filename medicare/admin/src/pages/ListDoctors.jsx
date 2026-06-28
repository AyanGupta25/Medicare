import { useState } from "react";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const initialDoctors = [
  { id: "01", name: "Dr. Alfaz Ahmed", specialization: "Surgeon", hospital: "Mount Adora Hospital, Sylhet.", avgRating: 4.8 },
  { id: "02", name: "Dr. Saleh Mahmud", specialization: "Neurologist", hospital: "Mount Adora Hospital, Sylhet.", avgRating: 4.8 },
  { id: "03", name: "Dr. Farid Uddin", specialization: "Dermatologist", hospital: "Mount Adora Hospital, Sylhet.", avgRating: 4.8 },
  { id: "04", name: "Dr. Priya Sharma", specialization: "Cardiologist", hospital: "City Medical Center, Delhi.", avgRating: 4.9 },
  { id: "05", name: "Dr. James Wilson", specialization: "Orthopedic", hospital: "Apollo Hospital, Mumbai.", avgRating: 4.7 },
  { id: "06", name: "Dr. Sarah Johnson", specialization: "Pediatrician", hospital: "Kids Care Hospital, Bangalore.", avgRating: 4.9 },
  { id: "07", name: "Dr. Robert Chen", specialization: "Ophthalmologist", hospital: "Vision Care Center, Chennai.", avgRating: 4.8 },
  { id: "08", name: "Dr. Emily Davis", specialization: "Gynecologist", hospital: "Women Health Clinic, Hyderabad.", avgRating: 4.9 },
  { id: "09", name: "Dr. Michael Brown", specialization: "Psychiatrist", hospital: "Mind Care Hospital, Pune.", avgRating: 4.7 },
  { id: "10", name: "Dr. Anita Patel", specialization: "Endocrinologist", hospital: "Hormone Care Center, Ahmedabad.", avgRating: 4.8 },
  { id: "11", name: "Dr. David Kumar", specialization: "Pulmonologist", hospital: "Lung Care Hospital, Kolkata.", avgRating: 4.6 },
  { id: "12", name: "Dr. Lisa Martinez", specialization: "Rheumatologist", hospital: "Joint Care Clinic, Jaipur.", avgRating: 4.8 },
];

const ListDoctors = () => {
  const [doctors, setDoctors] = useState(initialDoctors);

  const handleDelete = (id) => {
    setDoctors(doctors.filter((d) => d.id !== id));
    toast.success("Doctor removed!");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        All Doctors ({doctors.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-4 px-4 text-gray-500 font-medium">#</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Name</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Specialization</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Hospital</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Rating</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr
                key={doctor.id}
                className="border-b border-gray-50 hover:bg-gray-50 transition"
              >
                <td className="py-4 px-4 text-gray-500">{i + 1}</td>
                <td className="py-4 px-4 font-medium text-gray-900">
                  {doctor.name}
                </td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm">
                    {doctor.specialization}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-600 text-sm">
                  {doctor.hospital}
                </td>
                <td className="py-4 px-4 text-gray-600">
                  {doctor.avgRating} ⭐
                </td>
                <td className="py-4 px-4">
                  <button
                    onClick={() => handleDelete(doctor.id)}
                    className="w-8 h-8 bg-red-100 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-200 transition"
                  >
                    <FaTrash size={12} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListDoctors;