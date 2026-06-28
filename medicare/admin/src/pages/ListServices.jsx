import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const initialServices = [
  { id: 1, name: "Blood Pressure Check", category: "General", price: "₹200", duration: "15 mins", status: "active" },
  { id: 2, name: "Blood Sugar Test", category: "Laboratory Tests", price: "₹300", duration: "20 mins", status: "active" },
  { id: 3, name: "Full Blood Count", category: "Laboratory Tests", price: "₹500", duration: "30 mins", status: "active" },
  { id: 4, name: "X-Ray Scan", category: "Radiology", price: "₹800", duration: "20 mins", status: "active" },
  { id: 5, name: "Thyroid Test", category: "Laboratory Tests", price: "₹600", duration: "25 mins", status: "active" },
  { id: 6, name: "ECG", category: "Cardiology", price: "₹400", duration: "15 mins", status: "active" },
  { id: 7, name: "MRI Scan", category: "Radiology", price: "₹3000", duration: "60 mins", status: "active" },
  { id: 8, name: "Ultrasound", category: "Radiology", price: "₹1200", duration: "30 mins", status: "active" },
];

const ListServices = () => {
  const [services, setServices] = useState(initialServices);

  const handleDelete = (id) => {
    setServices(services.filter((s) => s.id !== id));
    toast.success("Service removed!");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        All Services ({services.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-4 px-4 text-gray-500 font-medium">#</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Service Name</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Category</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Price</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Duration</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Status</th>
              <th className="text-left py-4 px-4 text-gray-500 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, i) => (
              <tr key={service.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                <td className="py-4 px-4 text-gray-500">{i + 1}</td>
                <td className="py-4 px-4 font-medium text-gray-900">{service.name}</td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {service.category}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-600">{service.price}</td>
                <td className="py-4 px-4 text-gray-600">{service.duration}</td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm capitalize">
                    {service.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="w-8 h-8 bg-red-100 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-200 transition"
                    >
                      <FaTrash size={12} />
                    </button>
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

export default ListServices;