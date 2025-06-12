import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
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

    if (username === "Student" && password === "Student") {
      localStorage.setItem("user", JSON.stringify(user));
      console.log('Success');
      navigate("/Courses");
    } else {
      console.log('Login failed');
    }
  }

  return (
    <div>
      <h1>Students Login Page</h1>
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
        <Link to="/InstructorLogIn">SignIn as an Instructor</Link>
      </form>
    </div>
  );
}
