import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
    </nav>
  );
}