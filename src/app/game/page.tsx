"use client";
import React from "react";
import styles from "./page.module.scss";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Game = () => {
  return (
    <section className={`${styles.sectionGame} ${spaceGrotesk.className}`}>
      <h1>Soon</h1>

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
    </section>
  );
};

export default Game;
