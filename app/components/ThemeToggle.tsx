"use client";

import "../styles/darkToggle.css";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.theme = next ? "dark" : "light";
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="theme-toggle"
    >
      <span>{dark ? "🌙" : "☀️"}</span>
    </button>
  );
}
