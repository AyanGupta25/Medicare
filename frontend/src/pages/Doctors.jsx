import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { doctors } from "../assets/data/doctors";

const Doctors = () => {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctors.filter((doctor) => {
    if (!searchTerm) return true;
    return (
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find a Doctor
          </h1>
          <p className="text-gray-600 mb-8">
            Search from our list of expert doctors
          </p>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex gap-3 max-w-xl mx-auto"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or specialization..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-medium"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No doctors found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      className="w-full h-56 object-contain bg-gray-50 group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <FaStar className="text-yellow-400" />
                      <span className="text-gray-600 text-sm">
                        {doctor.avgRating} ({doctor.totalRating} reviews)
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-emerald-600 font-medium mb-2">
                      {doctor.specialization}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">
                      {doctor.hospital}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-semibold">
                        {doctor.totalPatients}+
                        <span className="text-gray-400 font-normal text-sm">
                          {" "}patients
                        </span>
                      </span>
                      <Link
                        to={`/doctors/${doctor.id}`}
                        className="flex items-center gap-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition text-sm font-medium"
                      >
                        Book Now <FaArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;