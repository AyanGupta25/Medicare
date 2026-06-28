import { useState } from "react";
import { toast } from "react-toastify";

const AddService = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service added successfully!");
    setFormData({ name: "", description: "", price: "", duration: "", category: "" });
  };

  const categories = [
    "Laboratory Tests",
    "Radiology",
    "Cardiology",
    "Neurology",
    "General",
    "Emergency",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Add New Service</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Service Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Blood Pressure Check"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500"
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Service price"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Duration (mins)</label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Duration in minutes"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Service description..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 resize-none"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;