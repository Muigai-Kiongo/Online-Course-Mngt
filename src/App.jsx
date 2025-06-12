import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import InstructorLogIn from './components/InstructorLogIn';
import InstructorPanel from './components/instructor/InstructorPanel';
import CourseContainer from './components/student/CourseContainer';
import CourseDetailPage from './components/student/CourseDetailsPage';
import EnrollmentPage from './components/student/EnrollmentPage'
import ProtectedRoutes from './components/ProtectedRoutes';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/InstructorLogIn" element={<InstructorLogIn />} />
        <Route element={<ProtectedRoutes />}>
            <Route path="/InstructorPanel" element={<InstructorPanel />} />
            <Route path="/CourseDetailsPage" element={<CourseDetailPage />} />
            <Route path="/CourseContainer" element={<CourseContainer />} />
            <Route path="/EnrollmentPage" element={<EnrollmentPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

