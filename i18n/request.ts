import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the locale provided by generateStaticParams
  const locale = await requestLocale;

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
