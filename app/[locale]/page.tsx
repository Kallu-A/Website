// app/[locale]/page.tsx
import { getTranslations, setRequestLocale } from "next-intl/server";

export const generateStaticParams = async () => {
  return [{ locale: "en" }, { locale: "fr" }];
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;


  setRequestLocale(locale);

  const t = await getTranslations("HomePage");

  return (
    <main className="container">
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
    </main>
  );
}
