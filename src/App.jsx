import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import InstructorLogIn from './components/InstructorLogIn';
import InstructorPanel from './components/instructor/InstructorPanel';
import Courses from './components/student/Courses';
import CourseDetailPage from './components/student/CourseDetailsPage';
import ProtectedRoutes from './components/ProtectedRoutes';
import EnrollmentPage from "./components/student/EnrollmentPage";


export default function App() {
  console.log("App rendered")
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/InstructorLogIn" element={<InstructorLogIn />} />
        <Route element={<ProtectedRoutes />}>
            <Route path="/InstructorPanel" element={<InstructorPanel />} />
            <Route path="/CourseDetailsPage" element={<CourseDetailPage />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/EnrollmentPage" element={<EnrollmentPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
