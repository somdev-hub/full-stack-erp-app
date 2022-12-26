import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    // <div className="App">
    //   <Dashboard />
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
