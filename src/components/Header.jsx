// the Header component will include the logo search bar filter inputs and button, username and logout/login
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header>
            <ul>
                <li>School of Code</li>
                <li>Home</li>
                <li><Link to="/LoginPage">Login</Link></li>
                <li>Exloxer</li>
            </ul>
        </header>
    </div>
  )
}
