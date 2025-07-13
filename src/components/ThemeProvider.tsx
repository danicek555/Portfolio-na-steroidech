"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

// Function to get initial theme from localStorage
const getInitialTheme = (): boolean => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
  }
  return false;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme and handle hydration
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      const parsedTheme = JSON.parse(savedTheme);
      setIsDarkMode(parsedTheme);

      // Apply theme to document immediately
      if (parsedTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    setIsInitialized(true);
  }, []);

  // Save theme to localStorage and apply to document when changed
  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

    // Add/remove dark class to html element for global styling
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode, isInitialized]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
