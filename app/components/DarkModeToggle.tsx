"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed bottom-6 right-6 w-14 h-14 rounded-full ${
        isDarkMode
          ? "bg-yellow-500 hover:bg-yellow-400 text-gray-900"
          : "bg-gray-800 hover:bg-gray-700 text-white"
      } flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50`}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}
