import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Contact from "./pages/Contact";
import MyAccount from "./pages/MyAccount";
import ProtectedRoute from "./components/shared/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/my-account"
        element={
          <ProtectedRoute>
            <MyAccount />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;