import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  const finalLocale = locale || "en";

  return {
    locale: finalLocale,
    messages: (await import(`../res/${finalLocale}.json`)).default,
  };
});
