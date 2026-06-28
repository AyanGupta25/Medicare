import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddDoctor from "./pages/AddDoctor";
import ListDoctors from "./pages/ListDoctors";
import Appointments from "./pages/Appointments";
import ServiceDashboard from "./pages/ServiceDashboard";
import AddService from "./pages/AddService";
import ListServices from "./pages/ListServices";
import ServiceAppointments from "./pages/ServiceAppointments";
import Layout from "./components/Layout";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="add-doctor" element={<AddDoctor />} />
        <Route path="list-doctors" element={<ListDoctors />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="service-dashboard" element={<ServiceDashboard />} />
        <Route path="add-service" element={<AddService />} />
        <Route path="list-services" element={<ListServices />} />
        <Route path="service-appointments" element={<ServiceAppointments />} />
      </Route>
    </Routes>
  );
}

export default App;