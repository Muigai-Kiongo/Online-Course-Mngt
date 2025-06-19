import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import InstructorPanel from "./components/instructor/InstructorPanel";
import CourseDetailPage from "./components/student/CourseDetailsPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import InstructorLogIn from "./components/InstructorLogIn";
import EnrollmentPage from "./components/student/EnrollmentPage";
import LandingPage from "./components/Landing/LandingPage";
import { courses as initialCourses } from "./components/student/Courses";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "Light";
  });

  const [enrolledCourseIds, setEnrolledCourseIds] = useState(() => {
    try {
      const stored = localStorage.getItem("enrolledCourses");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [courses, setCourses] = useState(() => {
    try {
      const stored = localStorage.getItem("courses");
      return stored ? JSON.parse(stored) : initialCourses;
    } catch {
      return initialCourses;
    }
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourseIds));
  }, [enrolledCourseIds]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ✅ Persist courses when they change
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const handleLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setEnrolledCourseIds([]);
  };

  const handleTheme = () => {
    setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));
    console.log("Theme Changed");
  };

  const handleEnroll = (courseId) => {
    if (!enrolledCourseIds.includes(courseId)) {
      setEnrolledCourseIds([...enrolledCourseIds, courseId]);
      alert("Enrolled successfully!");
    }
  };

  return (
    <Router>
      <div className={theme.toLowerCase()}>
        <Header
          user={user}
          onLogout={handleLogout}
          Theme={theme}
          setTheme={handleTheme}
        />
        <Routes>
          <Route path="/" element={<HomePage courses={courses} theme={theme} setTheme={setTheme}/>} />
          <Route
            path="/LoginPage"
            element={<LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/InstructorLogIn"
            element={<InstructorLogIn onLogin={handleLogin} />}
          />
          <Route element={<ProtectedRoutes />}>
            <Route
              path="/instructor-panel"
              element={
                <InstructorPanel
                  courses={courses}
                  setCourses={setCourses}
                />
              }
            />
            <Route
              path="/enrollPage"
              element={<EnrollmentPage enrolledCourseIds={enrolledCourseIds} />}
            />
            <Route
              path="/course/:id"
              element={
                <CourseDetailPage
                  courses={courses}
                  onEnroll={handleEnroll}
                  enrolledCourseIds={enrolledCourseIds}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
