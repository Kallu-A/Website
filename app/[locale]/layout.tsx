// app/[locale]/layout.tsx
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import type { LayoutProps } from "next-intl";

import LanguageToggle from "./components/LanguageToggle";
import ThemeToggle from "./components/ThemeToggle";

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
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
