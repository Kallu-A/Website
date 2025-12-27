import type { Metadata } from "next";

import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/background.css";
import "./styles/scaling.css";

export const metadata: Metadata = {
  title: "Kallu Website",
  description: "Personal website of Kallu",
};

import LanguageToggle from "./components/LanguageToggle";
import ThemeToggle from "./components/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="background">
        <div className="toggleContainer">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
