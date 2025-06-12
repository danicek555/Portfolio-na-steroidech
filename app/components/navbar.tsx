"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import clsx from "clsx";

const Navbar: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <nav
      className={clsx(
        "sticky top-0 w-full flex items-center justify-between px-10 py-4 border-b shadow-md z-50 transition-colors duration-300",
        isDarkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-white border-gray-200 text-black"
      )}
    >
      <Link
        href="/"
        className={clsx(
          "text-2xl font-bold font-montserrat tracking-wide no-underline transition-colors duration-300",
          isDarkMode ? "text-white" : "text-black"
        )}
        style={{ fontWeight: 700 }}
      >
        DANIEL MITKA
      </Link>
      <ul
        className={clsx(
          "flex items-center space-x-8 font-montserrat text-lg",
          isDarkMode ? "text-white" : "text-black"
        )}
      >
        <li>
          <Link
            href="/#home"
            className={clsx(
              "transition-colors no-underline font-bold",
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            )}
            style={{ fontWeight: 700 }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            className={clsx(
              "transition-colors no-underline font-bold",
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            )}
            style={{ fontWeight: 700 }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/#competitions"
            className={clsx(
              "transition-colors no-underline font-bold",
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            )}
            style={{ fontWeight: 700 }}
          >
            Competitions
          </Link>
        </li>
        <li>
          <Link
            href="/#work"
            className={clsx(
              "transition-colors no-underline font-bold",
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            )}
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
            className={clsx(
              "flex items-center transition-colors pr-8 no-underline font-bold",
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            )}
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
