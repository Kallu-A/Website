import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";

import LanguageToggle from "./components/LanguageToggle";
import ThemeToggle from "./components/ThemeToggle";

export const generateStaticParams = async () => {
  return [{ locale: "en" }, { locale: "fr" }];
};

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!["en", "fr"].includes(locale)) {
    return null;
  }

  const messages = (await import(`../../locales/${locale}.json`)).default;

  return (
    <div>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="toggleContainer">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
