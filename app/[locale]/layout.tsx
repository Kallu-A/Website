// app/[locale]/layout.tsx
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

import LanguageToggle from "./components/LanguageToggle";
import ThemeToggle from "./components/ThemeToggle";

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  // react use for locale param
  var param = await params;

  const messages = (await import(`../../res/${param.locale}.json`)).default;

  // Return wrapped children
  return (
    <NextIntlClientProvider locale={param.locale} messages={messages}>
      <div className="toggleContainer">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      {children}
    </NextIntlClientProvider>
  );
}
