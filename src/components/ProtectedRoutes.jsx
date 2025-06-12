import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log("user", user)
  return user? <Outlet/> : <Navigate to="/LoginPage"/>
}
