import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = user;

    if (username === "Student" && password === "Student") {
      setIsLoggedIn(true);
      console.log("Success");
    } else {
      console.log("Login failed");
    }
  }

  if (isLoggedIn) {
    return <HomePage />;
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
