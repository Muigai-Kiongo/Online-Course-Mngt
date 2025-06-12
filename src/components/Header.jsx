// the Header component will include the logo search bar filter inputs and button, username and logout/login
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  return (
    <div>
      <header>
        <h2>School of Code(OCM)</h2>
        <Search />
        <ul>
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
            <Link to="/LoginPage">Login</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
