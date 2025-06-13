// Header.jsx
import { Link, useNavigate } from "react-router-dom";

export default function Header({ user, onLogout, Theme, setTheme }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate("/"); // redirect to home after logout
  };
  const initial = user?.username?.charAt(0).toUpperCase() || "";

  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <h2>School of Code (OCM)</h2>

      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/enrollPage">Enroll</Link>
        </li>
        <li>
          <Link to="/instructor-panel">Instructor Panel</Link>
        </li>
        <li>
          <button onClick={setTheme}>
            {Theme === "Light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </li>

        {user ? (
          <>
            <li>
              <div>{initial}</div> {user.username}
            </li>
            <li>
              <button onClick={handleLogoutClick}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/LoginPage">Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
}
