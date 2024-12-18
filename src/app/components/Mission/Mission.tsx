// components/Mission/Mission.tsx
import { Space_Grotesk } from "next/font/google";
import styles from "./Mission.module.scss";
import { useTranslation } from "react-i18next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Mission() {
  const { t } = useTranslation("common");

  const missionData = [
    {
      title: t("activeCommunityTitle"),
      description: t("activeCommunityDescription"),
      icon: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 17.5C6.34 17.5 5 16.16 5 14.5C5 12.84 6.34 11.5 8 11.5C9.66 11.5 11 12.84 11 14.5C11 16.16 9.66 17.5 8 17.5ZM9.5 8C9.5 6.34 10.84 5 12.5 5C14.16 5 15.5 6.34 15.5 8C15.5 9.66 14.16 11 12.5 11C10.84 11 9.5 9.66 9.5 8ZM16 17.5C14.34 17.5 13 16.16 13 14.5C13 12.84 14.34 11.5 16 11.5C17.66 11.5 19 12.84 19 14.5C19 16.16 17.66 17.5 16 17.5Z",
    },
    {
      title: t("interactiveLearningTitle"),
      description: t("interactiveLearningDescription"),
      icon: "M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z",
    },
    {
      title: t("realScenariosTitle"),
      description: t("realScenariosDescription"),
      icon: "M3 3h18v2H3V3zm0 16h18v2H3v-2zm0-8h18v2H3v-2zm4-4h10v2H7V7zm0 8h10v2H7v-2zm0-4h10v2H7v-2z",
    },
    {
      title: t("diverseResourcesTitle"),
      description: t("diverseResourcesDescription"),
      icon: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0-3h8v2h-8zm0 6h4v2h-4z",
    },
    {
      title: t("versatilityTitle"),
      description: t("versatilityDescription"),
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm3-4c.83 0 1.5-.67 1.5-1.5S10.83 4 10 4s-1.5.67-1.5 1.5S9.17 7 10 7zm5 0c.83 0 1.5-.67 1.5-1.5S15.83 4 15 4s-1.5.67-1.5 1.5S14.17 7 15 7zm3 4c.83 0 1.5-.67 1.5-1.5S18.83 8 18 8s-1.5.67-1.5 1.5S17.17 11 18 11z",
    },
  ];
  return (
    <section className={`${styles.mission} ${spaceGrotesk.className}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t("projectAdvantages")}</h2>
          <p className={styles.description}>{t("advantagesDescription")}</p>
        </div>

        <div className={styles.grid}>
          {missionData.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24">
                  <path d={item.icon} />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
