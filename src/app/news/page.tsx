"use client";
import { Space_Grotesk } from "next/font/google";
import styles from "./page.module.scss";
import { useTranslation } from "react-i18next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function CyberInfoSection() {
  const { t } = useTranslation("common");

  const cyberInfoData = [
    {
      title: t("dataProtectionTitle"),
      subtitle: t("dataProtectionTipsTitle"),
      description: t("dataProtectionDescription"),
      items: [
        t("reliablePasswordsTitle"),
        t("antivirusProgramsTitle"),
        t("linkSecurityTitle"),
        t("wifiThreatProtectionTitle"),
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
      ),
    },
    {
      title: t("cybersecurityCareerTitle"),
      subtitle: t("careerResourcesTitle"),
      description: t("careerOverviewDescription"),
      items: [
        t("securityAnalystTitle"),
        t("securityEngineerTitle"),
        t("securityArchitectTitle"),
        t("penetrationTesterTitle"),
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8-3h4v3h-4V4z" />
        </svg>
      ),
    },
    {
      title: t("ddosAttacksTitle"),
      subtitle: t("ddosDescription"),
      description: t("ddosExplanation"),
      items: [
        t("massRequestsTitle"),
        t("attackTypesTitle"),
        t("protectionMethodsTitle"),
        t("preventionTitle"),
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12z" />
        </svg>
      ),
    },
    {
      title: t("preventionDescription"),
      subtitle: t("preventionDescription"),
      description: t("trojanExplanationTitle"),
      items: [
        t("trojanTypesTitle"),
        t("detectionMethodsTitle"),
        t("protectionMethodsTrojanTitle"),
        t("secureRemovalTitle"),
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
        </svg>
      ),
    },
  ];
  return (
    <section className={`${styles.section} ${spaceGrotesk.className}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("cybersecurityTitle")}</h2>
        <p className={styles.subtitle}>{t("cybersecurityDescription")}</p>

        <div className={styles.grid}>
          {cyberInfoData.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>{card.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardSubtitle}>{card.subtitle}</p>
                <p className={styles.cardDescription}>{card.description}</p>
                <ul className={styles.cardList}>
                  {card.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
