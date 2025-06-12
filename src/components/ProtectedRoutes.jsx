import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutes() {
  let user;

  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch (err) {
    user = null;
  }

  const isValidUser = user && user.username && user.password;

  console.log("ProtectedRoutes: user =", user);

  return isValidUser ? <Outlet /> : <Navigate to="/LoginPage" />;
}
