"use client";
import React, { useState } from "react";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import i18next from "../../../i18n/i18n";
import { Switch } from "antd";
import "./Header.scss";
import { useTranslation } from "react-i18next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [language, setLanguage] = useState("ru"); // Устанавливаем начальный язык
  const { t } = useTranslation("common"); // Подключаем переводы из 'common'

  const changeLanguage = (checked: boolean) => {
    const lng = checked ? "en" : "ru";
    setLanguage(lng);
    i18next.changeLanguage(lng); // Меняем язык
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo-icon"></div>
        <div className={`logo-text ${spaceGrotesk.className}`}>
          <span>Cyber</span>Info
        </div>
      </div>
      <button
        className={`menu-button ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
        <li onClick={closeMenu}>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            {t("home")}
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/news" className={pathname === "/news" ? "active" : ""}>
            {t("news")}
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/news" className={pathname === "/news" ? "active" : ""}>
            {t("game")}
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>
            {t("aboutUs")}
          </Link>
        </li>
      </ul>
      <div className="social_container">
        <div className={`social-buttons ${isMenuOpen ? "active" : ""}`}>
          <a href="#" className="social-button">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                d="M21.75 2.85c-.3-.23-.7-.29-1.05-.14L2.6 10.05c-.45.18-.75.6-.75 1.1 0 .5.3.93.75 1.1l5.43 2.15c.3.12.65.07.91-.14L16.7 8.5l-6.7 6.63c-.22.22-.3.55-.2.86l1.13 3.45c.13.38.48.65.89.65.05 0 .1 0 .16-.01.42-.06.75-.37.83-.78l1.1-5.6 5.83-2.44c.38-.15.65-.5.69-.9s-.1-.8-.41-1.04z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#" className="social-button">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                d="M20.317 4.369a19.791 19.791 0 00-4.885-1.506.076.076 0 00-.08.037c-.211.376-.446.867-.608 1.26a18.46 18.46 0 00-5.19 0 11.41 11.41 0 00-.614-1.26.077.077 0 00-.08-.037 19.736 19.736 0 00-4.885 1.506.07.07 0 00-.032.028c-3.074 4.57-3.913 9.02-3.497 13.409a.08.08 0 00.031.054c2.048 1.53 4.03 2.459 5.977 3.068a.076.076 0 00.083-.028c.46-.63.868-1.295 1.217-1.991a.076.076 0 00-.042-.108 12.85 12.85 0 01-1.877-.885.076.076 0 01-.008-.13c.126-.096.252-.195.372-.292a.075.075 0 01.077-.01c3.945 1.793 8.216 1.793 12.138 0a.075.075 0 01.079.009c.121.097.247.196.373.292a.076.076 0 01-.006.13 13.014 13.014 0 01-1.878.884.076.076 0 00-.041.108c.363.705.77 1.37 1.216 1.992a.076.076 0 00.083.028c1.947-.609 3.93-1.538 5.977-3.068a.075.075 0 00.032-.053c.502-5.226-.797-9.605-3.497-13.41a.07.07 0 00-.032-.028zM8.56 15.66c-1.058 0-1.915-.97-1.915-2.164s.845-2.164 1.915-2.164c1.072 0 1.923.979 1.915 2.164 0 1.194-.846 2.164-1.915 2.164zm6.88 0c-1.058 0-1.915-.97-1.915-2.164s.845-2.164 1.915-2.164c1.072 0 1.923.979 1.915 2.164 0 1.194-.846 2.164-1.915 2.164z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#" className="social-button">
            <svg viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                fill="white"
              />
            </svg>
          </a>

          <Switch
            checkedChildren="RU"
            unCheckedChildren="EN"
            defaultChecked={language === "ru"}
            onChange={changeLanguage}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
