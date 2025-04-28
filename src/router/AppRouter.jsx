// filepath: src/router/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import CollectionPage from "../pages/CollectionPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import "../styles/App.css";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}
