import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Subjects from "./pages/Subjects/Subjects";
import Attendance from "./pages/Attendance/Attendance";
import Fees from "./pages/Fees/Fees";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/fees" element={<Fees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
