import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import InstructorLogIn from './components/InstructorLogIn';
import InstructorPanel from './components/instructor/InstructorPanel';
import CourseContainer from './components/student/CourseContainer';
import CourseDetailPage from './components/student/CourseDetailsPage';
import EnrollmentPage from './components/student/EnrollmentPage'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/InstructorLogIn" element={<InstructorLogIn />} />
        <Route path="/InstructorPanel" element={<InstructorPanel />} />
        <Route path="/CourseDetailsPage" element={<CourseDetailPage />} />
        <Route path="/CourseDetailsPage" element={<CourseContainer />} />
        <Route path="/EnrollmentPage" element={<EnrollmentPage />} />
      </Routes>
    </Router>
  );
}

