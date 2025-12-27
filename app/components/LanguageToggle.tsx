"use client";

import "../styles/langToggle.css";
import { useEffect, useState } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState<"fr" | "en">("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as "fr" | "en" | null;
    if (saved) setLang(saved);
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "fr" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="lang-toggle"
    >
      <span>
        {lang === "en" ? "🇬🇧" : "🇫🇷"}
      </span>
    </button>
  );
}
