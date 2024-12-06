"use client";
import { Space_Grotesk } from "next/font/google";
import "./page.scss";
import Mission from "./components/Mission/Mission";
import CommunitySection from "./components/CommunitySection/CommunitySection";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  const { t } = useTranslation("common"); // Подключаем переводы из 'common'

  return (
    <>
      <section className={`banner ${spaceGrotesk.className}`}>
        <div className="banner-content">
          <h1 className="title">{t("careerBoostTitle")}</h1>
          <p className="subtitle">{t("careerBoostDescription")}</p>
          <button className="join-button">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              href="https://discord.gg/8bH7xc8t"
            >
              {t("enterCommunity")}
            </Link>
          </button>
        </div>
      </section>
      <Mission />
      <CommunitySection />
      <h2
        style={{ marginBottom: "30px", marginLeft: "10px", fontSize: "35px" }}
      >
        {t("kiber")}
      </h2>

      <iframe
        width="100%"
        height="750px"
        src="https://cybermap.kaspersky.com/en/widget/dynamic/dark"
      ></iframe>
    </>
  );
}
