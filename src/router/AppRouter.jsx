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
    <div className="min-h-screen text-ink font-serif">
      {/* Header */}
      <header className="bg-wood text-parchment py-6 text-center shadow-md">
        <h1 className="text-4xl font-bold">Old-School Library</h1>
        <p className="text-lg mt-2">Explore timeless classics and more!</p>
      </header>

      {/* Main Content */}
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
      </main>

      {/* Footer */}
      <footer className="bg-wood text-parchment py-4 text-center">
        <p className="text-sm">&copy; 2025 Conner's mind at work</p>
      </footer>
    </div>
  );
}
