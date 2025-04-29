// filepath: src/router/AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import CollectionPage from "../pages/CollectionPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import "../styles/tailwind.css"; // Import your custom Tailwind CSS file

export default function AppRouter() {
  return (
    <div className="min-h-screen bg-parchment-texture bg-parchment text-ink font-serif">
      <div className="min-h-screen bg-parchment-texture bg-parchment text-ink font-serif">
        <h1 className="text-3xl font-bold">Old-School Library</h1>
        <p className="text-lg">This is a test of the custom Tailwind theme.</p>
      </div>
      <main className="p-6">
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
        <p className="text-lg">
          Welcome to the library! Browse through our collection of timeless
          classics.
        </p>
      </main>
      <footer className="bg-wood text-parchment p-4 text-center">
        <p>&copy; 2025 Conner's mind at work</p>
      </footer>
    </div>
  );
}
