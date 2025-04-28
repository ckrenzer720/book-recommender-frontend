import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        Book Recommender
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/search" className="hover:underline">
          Search
        </Link>
        <Link to="/collection" className="hover:underline">
          My Collection
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
