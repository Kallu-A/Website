"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = pathname.startsWith("/en")
    ? pathname.replace("/en", "/fr")
    : pathname.replace("/fr", "/en");

  return (
    <button
      onClick={() => router.push(switchTo)}
      aria-label="Toggle language"
      className="lang-toggle"
    >
      <span>{pathname.startsWith("/en") ? "🇬🇧" : "🇫🇷"}</span>
    </button>
  );
}
