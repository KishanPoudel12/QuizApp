import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const {isAuthenticated,logout}=useAuth0()

  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`w-full py-4 shadow-md transition-all ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          🧠 QuizoMania
        </NavLink>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          {[
            "/",
            "/Leaderboard",
            ...(isAuthenticated ? [] : ["/Signup"]),
            ...(!isAuthenticated ? ["/Login"] : []),
          ].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `hover:text-yellow-500 transition ${
                  isActive ? "text-yellow-500" : ""
                }`
              }
            >
              {path === "/" ? "Home" : path.substring(1)}
            </NavLink>
          ))}
          {isAuthenticated && (
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="hover:text-yellow-500 transition"
            >
              Logout
            </button>
          )}
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`ml-4 p-2 rounded-full transition ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
