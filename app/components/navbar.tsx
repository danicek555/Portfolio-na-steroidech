"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const Navbar: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <nav
      className={`sticky top-0 w-full flex items-center justify-between px-10 py-4 ${
        isDarkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-white border-gray-200 text-black"
      } border-b shadow-md z-50 transition-colors duration-300`}
    >
      <Link
        href="/"
        className={`text-2xl font-bold font-montserrat tracking-wide ${
          isDarkMode ? "text-white" : "text-black"
        } no-underline transition-colors duration-300`}
        style={{ fontWeight: 700 }}
      >
        DANIEL MITKA
      </Link>
      <ul
        className={`flex items-center space-x-8 font-montserrat text-lg ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <li>
          <Link
            href="/#home"
            className={`${
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            } transition-colors no-underline font-bold`}
            style={{ fontWeight: 700 }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            className={`${
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            } transition-colors no-underline font-bold`}
            style={{ fontWeight: 700 }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/#competitions"
            className={`${
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            } transition-colors no-underline font-bold`}
            style={{ fontWeight: 700 }}
          >
            Competitions
          </Link>
        </li>
        <li>
          <Link
            href="/#work"
            className={`${
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            } transition-colors no-underline font-bold`}
            style={{ fontWeight: 700 }}
          >
            Work
          </Link>
        </li>
        <li>
          <a
            href="https://www.instagram.com/dan_mitka"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            } transition-colors pr-8 no-underline font-bold`}
            style={{ fontWeight: 700 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
