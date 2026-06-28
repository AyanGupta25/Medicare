import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Doctors", path: "/doctors" },
    { name: "Services", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Appointments", path: "/my-account" },
  ];

  const services = [
    "Blood Pressure Check",
    "Blood Sugar Test",
    "Full Blood Count",
    "X-Ray Scan",
    "Thyroid Test",
  ];

  return (
    <footer className="bg-emerald-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">MediCare</h2>
                <p className="text-emerald-600 text-sm font-medium">Healthcare Solutions</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed italic mb-6">
              Your trusted partner in healthcare innovation. We are committed to
              providing exceptional medical care with cutting-edge technology and
              compassionate service.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <FaPhone size={12} />
                </span>
                +91 7234527849
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <FaEnvelope size={12} />
                </span>
                creator@gmail.com
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <FaMapMarkerAlt size={12} />
                </span>
                Lucknow, India
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition text-sm group"
                  >
                    <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xs group-hover:bg-emerald-600 group-hover:text-white transition">
                      &#8594;
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Stay Connected</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Subscribe for health tips, medical updates, and wellness insights
              delivered to your inbox.
            </p>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-emerald-500"
              />
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-medium hover:bg-emerald-700 transition">
                Subscribe
              </button>
            </div>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/ayan-gupta-5a0b14271" target="_blank" rel="noreferrer" className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:border-emerald-600 hover:text-emerald-600 transition">
                <FaLinkedin size={14} />
              </a>
              <a href="https://github.com/AyanGupta25" target="_blank" rel="noreferrer" className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:border-emerald-600 hover:text-emerald-600 transition">
                <FaGithub size={14} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">2026 MediCare Healthcare.</p>
          <p className="text-gray-500 text-sm">
            Designed by{" "}
            <span className="text-emerald-600 font-semibold">Ayan Gupta</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;