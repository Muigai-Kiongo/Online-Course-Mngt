// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import InstructorPanel from "./components/instructor/InstructorPanel";
import CourseDetailPage from "./components/student/CourseDetailsPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import InstructorLogIn from './components/InstructorLogIn';
import EnrollmentPage from "./components/student/EnrollmentPage";
import "./App.css";


export default function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  const handleTheme = () => {
  setTheme(prev => (prev === "Light" ? "Dark" : "Light"));
  console.log("Theme Changed");
};


  return (
    <Router>
      <div className={theme.toLowerCase()}>
      <Header user={user} onLogout={handleLogout} Theme={theme} setTheme={handleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/InstructorLogIn" element={<InstructorLogIn onLogin={handleLogin}  />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/instructor-panel" element={<InstructorPanel />} />
          <Route path="/enrollPage" element={<EnrollmentPage />} />
          <Route path="/course/:id" element={<CourseDetailPage />} />
        </Route>
      </Routes>
      </div>
    </Router>
  );
}
