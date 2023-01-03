import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Subjects from "./pages/Subjects/Subjects";
import Attendance from "./pages/Attendance/Attendance";
import Fees from "./pages/Fees/Fees";
import Login from "./pages/Login/Login";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        {user && <Route path="/" element={<Dashboard />} />}
        <Route path="/profile" element={<Profile />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
        <Route path="/about-us" exact element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
