// app/[locale]/page.tsx
import { getTranslations, setRequestLocale } from "next-intl/server";
import Library from "./components/Library";
import { time } from "node:console";
import { title } from "node:process";

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

  const educationTranslate = await getTranslations("education");
  const educationName = educationTranslate("name");
  const educationBooks = [
    {
      title: educationTranslate("iutDegree"),
      color: "#EC282A",
      height: "170px",
      icon: "icons/ul_logo.png",
    },
    {
      title: educationTranslate("engineer"),
      color: "#6C2466",
      height: "195px",
      icon: "icons/tn_logo.png",
    },
    {
      title: educationTranslate("canada"),
      color: "#118849",
      height: "210px",
      icon: "icons/uds_logo.png",
    },
  ];

  const workXp = await getTranslations("workXp");
  const workXpName = workXp("name");
  const workXpBooks = [
    {
      title: workXp("nameBluepad"),
      color: "#4294D6",
      height: "190px",
      icon: "icons/bluepad_logo.png",
    },
    {
      title: workXp("nameAbso"),
      color: "#2A2A2A",
      height: "165px",
      icon: "icons/abso_logo.png",
    },
    {
      title: workXp("nameInria"),
      color: "#5B5148",
      height: "195px",
      icon: "icons/inria_logo.png",
    },
    {
      title: workXp("nameLuccaStage"),
      color: "#FF7B3D",
      height: "220px",
      icon: "icons/lucca_logo.png",
    },
    {
      title: workXp("nameLucca"),
      color: "#FF7B3D",
      height: "210px",
      icon: "icons/lucca_logo.png",
    },
  ];

  const langTranslate = await getTranslations("lang");
  const langName = langTranslate("name");
  const langBooks = [
    {
      title: langTranslate("english"),
      color: "#3B82F6",
      height: "190px",
      icon: "icons/uk_flag.png",
    },
    {
      title: langTranslate("french"),
      color: "#EF4444",
      height: "200px",
      icon: "icons/fr_flag.png",
    },
    {
      title: langTranslate("spanish"),
      color: "#F59E0B",
      height: "160px",
      icon: "icons/es_flag.png",
    },
    {
      title: langTranslate("indonesian"),
      color: "#10B981",
      height: "150px",
      icon: "icons/id_flag.jpeg",
    },
  ];

  return (
    <main className="container">
      <Library
        top="30px"
        right="5%"
        sectionTitle={educationName}
        Books={educationBooks}
      />
      <Library
        top="200px"
        left="55%"
        sectionTitle={workXpName}
        Books={workXpBooks}
      />
      <Library
        top="400px"
        right="12%"
        sectionTitle={langName}
        Books={langBooks}
      />
    </main>
  );
}
