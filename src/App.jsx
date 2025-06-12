import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import InstructorLogIn from "./components/InstructorLogIn";
import EnrollmentPage from "./components/student/EnrollmentPage";
import InstructorPanel from "./components/instructor/InstructorPanel";
import CourseDetailsPage from "./components/student/CourseDetailsPage";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/InstructorLogIn" element={<InstructorLogIn />} />
        <Route path="/enrollPage" element={<EnrollmentPage />} />
        <Route path="/instructor-panel" element={<InstructorPanel />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
      </Routes>
    </Router>
  );
}
