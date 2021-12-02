import { Link } from "react-router-dom";
import MovieSearch from "./MovieSearch";

export default function Navbar() {
  return (
    <div>
      <MovieSearch />
      <nav>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </nav>

    </div>
  );
}