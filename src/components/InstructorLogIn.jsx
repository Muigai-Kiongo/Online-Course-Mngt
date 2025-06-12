import React from 'react'
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function InstructorLogIn() {
          const [isLoggedIn, setIsLoggedIn] = useState(false);
          const [user, setUser] = useState({
            username: "", 
            password: "",
          });
        
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
              localStorage.setItem("user", JSON.stringify(user));
              setIsLoggedIn(true);
              console.log('Success');
            } else {
              console.log('Login failed');
            }
          }
        
            if (isLoggedIn) {
                return <Navigate to={"/InstructorPanel"}/>
            
          }
        
          return (
            <div>
              <h1>Instructor Login Page</h1>
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
