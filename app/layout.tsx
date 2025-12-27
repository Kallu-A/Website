import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kallu-A Website",
  description: "Personal website of Kallu-A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
