import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes() {
    let user;

  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch (err) {
    user = null;
  }

  const isValidUser = user && user.username && user.password;
  console.log("user", user)
  return user? <Outlet/> : <Navigate to="/LoginPage"/>
}
