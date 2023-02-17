import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Subjects from "./pages/Subjects/Subjects";
import Attendance from "./pages/Attendance/Attendance";
import Fees from "./pages/Fees/Fees";
import Login from "./pages/Login/Login";
import AboutUs from "./pages/AboutUs/AboutUs";
import Mail from "./pages/Mail/Mail";
import Cafeteria from "./pages/Cafeteria/Cafeteria";
import Transport from "./pages/Transport/Transport";
import Index from "./landing page/Root/Index";

function App() {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Index />} />
        {user && <Route path="/" element={<Dashboard />} />}
        <Route path="/profile" element={<Profile />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
        <Route path="/about-us" exact element={<AboutUs />} />
        <Route path="/mail/:id" exact element={<Mail />} />
        <Route path="/cafeteria" exact element={<Cafeteria />} />
        <Route path="/transport" exact element={<Transport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
