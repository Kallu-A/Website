// app/[locale]/layout.tsx
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

import LanguageToggle from "./components/LanguageToggle";
import ThemeToggle from "./components/ThemeToggle";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const messages = (await import(`../../res/${locale}.json`)).default;

  // Return wrapped children
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="toggleContainer">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      {children}
    </NextIntlClientProvider>
  );
}
