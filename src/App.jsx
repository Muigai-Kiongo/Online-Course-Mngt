import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import InstructorLogIn from './components/InstructorLogIn';


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/InstructorLogIn" element={<InstructorLogIn />} />
      </Routes>
    </Router>
  );
}
