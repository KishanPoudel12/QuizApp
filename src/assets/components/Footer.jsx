import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`text-center p-4 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-400"
          : "bg-gray-200 text-gray-700"
      }`}
    >
      <p className="text-sm">
        © {new Date().getFullYear()} Quiz App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
