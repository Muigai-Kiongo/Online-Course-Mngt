import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage({ onLogin }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = user;

    if (username === "Instructor" && password === "Instructor") {
      onLogin(user); // ✅ Call parent login handler
      navigate("/Courses"); // redirect as needed
      console.log("Success in logging in")
    } else {
      console.log('Login failed');
    }
  }

  return (
    <div>
      <h2>Instructors' Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
        <Link to="/LoginPage">SignIn as a Student</Link>
      </form>
    </div>
  );
}
