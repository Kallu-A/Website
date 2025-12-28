import type { Metadata } from "next";

import "./styles/theme.css";
import "./styles/background.css";
import "./styles/scaling.css";
import "./styles/darkToggle.css";
import "./styles/langToggle.css";
import "./styles/library.css";

export const metadata: Metadata = {
  title: "Kallu",
  description: "",
  icons: {
    icon: "/Website/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="background">
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
      <body>{children}</body>
    </html>
  );
}
