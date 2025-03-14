import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Acheivements from "./pages/Acheivements";
import Calender from "./pages/Calender";
import Footer from "./pages/Footer";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-[url('https://img.freepik.com/premium-photo/dark-oxford-blue-abstract-3d-geometric-background-design_851755-195587.jpg')] bg-cover" >
                <Navbar />
                <div className="p-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/acheivements" element={<Acheivements />} />
                        <Route path="/calender" element={<Calender />} />
                    </Routes>
                </div>
                <Footer className/>
            </div>
        </Router>
    );
}

export default App;
