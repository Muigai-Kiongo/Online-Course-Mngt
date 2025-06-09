// Generally this is the login page enatiling the login form and handling the form validation
import React from 'react';

export default function LoginPage() {
  console.log("LoginPage rendered");
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

