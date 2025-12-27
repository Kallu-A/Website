// app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const preferredLanguage = window.navigator.language.startsWith("fr")
      ? "fr"
      : "en";
    router.replace(
      process.env.NODE_ENV === "production"
        ? "/Website"
        : "" + `${preferredLanguage}`
    );
  }, [router]);

  return (
    <head>
      <meta httpEquiv="refresh" content="0; url=/en" />
    </head>
  );
}
