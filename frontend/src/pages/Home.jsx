import { Link } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { FaStar, FaArrowRight, FaPhone, FaCalendarAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import BannerImg from "../assets/BannerImg.png";
import { doctors, services, certifications } from "../assets/data/doctors";

const Home = () => {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "15+", label: "Clinic Locations" },
    { number: "100%", label: "Patient Satisfaction" },
    { number: "200+", label: "Expert Doctors" },
  ];

  const features = [
    "Schedule the appointment directly.",
    "Search for your doctor here, and contact their office.",
    "View our physicians who are accepting new patients.",
    "Find a Doctor who matches your need.",
  ];

  const badges = [
    { icon: "👨‍⚕️", label: "Certified Specialists" },
    { icon: "🕐", label: "24/7 Availability" },
    { icon: "🛡️", label: "Safe & Secure" },
    { icon: "👥", label: "500+ Doctors" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-emerald-400 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-12 bg-white shadow-sm">
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl">
                  🏥
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Medi<span className="text-emerald-600">Care+</span>
                  </h2>
                  <div className="flex text-yellow-400 text-sm gap-0.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-lg mb-2">Premium Healthcare</p>
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-8">
                At Your Fingertips
              </h1>

              {/* Badges */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {badges.map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-3 rounded-full font-medium text-sm"
                  >
                    <span>{badge.icon}</span>
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/doctors"
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition shadow-lg"
                >
                  <FaCalendarAlt /> Book Appointment Now
                </Link>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 px-6 py-3 bg-red-100 text-red-500 border border-red-300 rounded-full font-semibold hover:bg-red-200 transition"
                >
                  <FaPhone /> Emergency Call
                </a>
              </div>
            </div>

            {/* Right - Doctor Group Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={BannerImg}
                alt="doctors"
                className="w-full max-w-lg object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-3xl font-bold text-emerald-600">
                  {stat.number}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {certifications.map((cert, i) => (
              <img
                key={i}
                src={cert}
                alt="certification"
                className="h-16 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              World-class care for everyone. Our health system offers unmatched
              expertise and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl hover:shadow-lg transition group cursor-pointer"
                style={{ background: service.bgColor }}
              >
                <img
                  src={service.photo}
                  alt={service.name}
                  className="w-16 h-16 object-cover rounded-xl mb-4"
                />
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: service.textColor }}
                >
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <Link
                  to="/doctors"
                  className="flex items-center gap-1 text-sm font-medium"
                  style={{ color: service.textColor }}
                >
                  Learn More <FaArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Doctors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Great Doctors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              World-class care for everyone. Our health system offers unmatched
              expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.slice(0, 6).map((doctor) => (
              <div
                key={doctor.id}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
              >
                <div className="overflow-hidden">
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-full h-64 object-contain bg-gray-50 group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm text-gray-600">
                      {doctor.avgRating} ({doctor.totalRating} reviews)
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-emerald-600 font-medium text-sm mb-3">
                    {doctor.specialization}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {doctor.totalPatients}+ patients
                    </span>
                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="flex items-center gap-1 text-emerald-600 font-medium text-sm hover:gap-2 transition-all"
                    >
                      View Profile <FaArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/doctors"
              className="px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition"
            >
              View All Doctors
            </Link>
          </div>
        </div>
      </section>

      {/* Banner / Features Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src={BannerImg}
                alt="banner"
                className="w-full max-w-md rounded-3xl shadow-xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Find a Doctor at Your Own Ease
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our platform makes it easy to find the right doctor for your
                needs. Browse by specialization, location, and availability.
              </p>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition"
              >
                Find a Doctor <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;