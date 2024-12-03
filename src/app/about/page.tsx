import { Space_Grotesk } from "next/font/google";
import styles from "./page.module.scss";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const aboutData = [
  {
    title: "Образовательные материалы: ",
    description:
      "Профессионально подготовленные ресурсы по широкому спектру тем, от базовой онлайн-безопасности до защиты от сложных угроз.",
    stats: "1000+ активных пользователей",
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
  },
  {
    title: "Интерактивное обучение:",
    description:
      "Виртуальная игра, имитирующая реальные ситуации, чтобы сделать процесс обучения увлекательным и практичным.",
    stats: "50+ обучающих курсов",
    icon: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
  },
  {
    title: "Доступный контент: ",
    description:
      "Материалы разработаны как для новичков, так и для профессионалов, чтобы каждый мог повысить свою осведомлённость в области кибербезопасности.",
    stats: "24/7 поддержка",
    icon: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
  },
];

const featureList = [
  "Интерактивные курсы и симуляции",
  "Сертифицированные эксперты",
  "Регулярные обновления контента",
  "Практические задания",
  "Персонализированное обучение",
  "Поддержка сообщества",
];

export default function AboutUs() {
  return (
    <section className={`${styles.aboutUs} ${spaceGrotesk.className}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>О нас - CyberGuard</h2>
          <p className={styles.subtitle}>
            <br />
            Добро пожаловать в CyberGuard — комплексную платформу, посвящённую
            обучению кибербезопасности для жителей Казахстана независимо от
            возраста и уровня подготовки.
            <br />
            <br />
            Наша миссия — дать каждому человеку знания и навыки, необходимые для
            безопасной и уверенной навигации в цифровом мире. В эпоху постоянных
            онлайн-угроз мы верим, что образование в области кибербезопасности —
            это не просто необходимость, а жизненно важный навык.
            <br />
            <br />
            <br />
            На платформе CyberGuard вы найдёте:
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.cards}>
            {aboutData.map((item, index) => (
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

          <div className={styles.features}>
            <div className={styles.featuresContent}>
              <h3 className={styles.featuresTitle}>Почему мы?</h3>
              <p className={styles.featuresDescription}>
                Наша платформа создана командой энтузиастов, занявшей 1-е место
                на республиканском конкурсе в Казахстане, что подтверждает
                инновационность нашего проекта.
                <br />
                <br />
                Присоединяйтесь к CyberGuard и станьте частью безопасного
                цифрового будущего. Вместе мы сможем защитить себя и наше
                сообщество в интернете.
              </p>
              <ul className={styles.featuresList}>
                {featureList.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className={styles.featuresButton}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://discord.gg/8bH7xc8t"
                >
                  Начать обучение
                </Link>
              </button>
            </div>
            <div className={styles.featuresImage}>
              <div className={styles.imageWrapper}>
                <svg className={styles.decorElement1} viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <svg className={styles.decorElement2} viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
