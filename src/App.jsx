import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import InstructorPanel from "./components/instructor/InstructorPanel";
import CourseDetailPage from "./components/student/CourseDetailsPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import InstructorLogIn from './components/InstructorLogIn';
import EnrollmentPage from "./components/student/EnrollmentPage";

export default function App() {
  console.log("App rendered");
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/InstructorLogIn" element={<InstructorLogIn />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/instructor-panel" element={<InstructorPanel />} />
          <Route path="/enrollPage" element={<EnrollmentPage />} />
          <Route path="/course/:id" element={<CourseDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
