import { useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-700 text-white px-4 py-2 rounded"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
