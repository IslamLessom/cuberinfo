"use client";

import { useTranslation } from "react-i18next";
import { Space_Grotesk } from "next/font/google";
import styles from "./CommunitySection.module.scss";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function CommunitySection() {
  const { t } = useTranslation("common"); // Подключаем переводы из 'common'

  const communityData = [
    {
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            d="M21.75 2.85c-.3-.23-.7-.29-1.05-.14L2.6 10.05c-.45.18-.75.6-.75 1.1 0 .5.3.93.75 1.1l5.43 2.15c.3.12.65.07.91-.14L16.7 8.5l-6.7 6.63c-.22.22-.3.55-.2.86l1.13 3.45c.13.38.48.65.89.65.05 0 .1 0 .16-.01.42-.06.75-.37.83-.78l1.1-5.6 5.83-2.44c.38-.15.65-.5.69-.9s-.1-.8-.41-1.04z"
            fill="white"
          />
        </svg>
      ),
      title: t("telegramTitle"),
      description: t("telegramDescription"),
      link: t("telegramLink"),
      links: "https://t.me/cyberguardkaz",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            d="M20.317 4.369a19.791 19.791 0 00-4.885-1.506.076.076 0 00-.08.037c-.211.376-.446.867-.608 1.26a18.46 18.46 0 00-5.19 0 11.41 11.41 0 00-.614-1.26.077.077 0 00-.08-.037 19.736 19.736 0 00-4.885 1.506.07.07 0 00-.032.028c-3.074 4.57-3.913 9.02-3.497 13.409a.08.08 0 00.031.054c2.048 1.53 4.03 2.459 5.977 3.068a.076.076 0 00.083-.028c.46-.63.868-1.295 1.217-1.991a.076.076 0 00-.042-.108 12.85 12.85 0 01-1.877-.885.076.076 0 01-.008-.13c.126-.096.252-.195.372-.292a.075.075 0 01.077-.01c3.945 1.793 8.216 1.793 12.138 0a.075.075 0 01.079.009c.121.097.247.196.373.292a.076.076 0 01-.006.13 13.014 13.014 0 01-1.878.884.076.076 0 00-.041.108c.363.705.77 1.37 1.216 1.992a.076.076 0 00.083.028c1.947-.609 3.93-1.538 5.977-3.068a.075.075 0 00.032-.053c.502-5.226-.797-9.605-3.497-13.41a.07.07 0 00-.032-.028zM8.56 15.66c-1.058 0-1.915-.97-1.915-2.164s.845-2.164 1.915-2.164c1.072 0 1.923.979 1.915 2.164 0 1.194-.846 2.164-1.915 2.164zm6.88 0c-1.058 0-1.915-.97-1.915-2.164s.845-2.164 1.915-2.164c1.072 0 1.923.979 1.915 2.164 0 1.194-.846 2.164-1.915 2.164z"
            fill="white"
          />
        </svg>
      ),
      title: t("discordTitle"),
      description: t("discordDescription"),
      link: t("discordLink"),
      links: "https://discord.gg/8bH7xc8t",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." fill="white" />
        </svg>
      ),
      title: t("instagramTitle"),
      description: t("instagramDescription"),
      link: t("instagramLink"),
      links:
        "https://www.instagram.com/cyberguardkaz?igsh=MWc0Y3o5ZndudzF4ZQ==",
    },
  ];

  return (
    <section className={`${styles.section} ${spaceGrotesk.className}`}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h2 className={styles.title}>{t}</h2>
          <p className={styles.subtitle}>{t("subtitle")}</p>
          <button className={styles.button}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              href="https://discord.gg/8bH7xc8t"
            >
              {t("button")}
            </Link>
          </button>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.illustration}></div>
          <div className={styles.communityCards}>
            {communityData.map((card, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>{card.icon}</div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
                <p className={styles.cardContent}>{card.description}</p>
                <a href={card.links} className={styles.cardLink}>
                  {card.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
