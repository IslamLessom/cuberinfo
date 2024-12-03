import { Space_Grotesk } from "next/font/google";
import "./page.scss";
import Mission from "./components/Mission/Mission";
import CommunitySection from "./components/CommunitySection/CommunitySection";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <>
      <section className={`banner ${spaceGrotesk.className}`}>
        <div className="banner-content">
          <h1 className="title">
            Дайте толчок своей карьере
            <br /> в сфере кибербезопасности
          </h1>
          <p className="subtitle">
            Повысьте свой уровень карьеры в сфере кибербезопасности, освоив
            передовые методы, адаптируясь к меняющимся угрозам и цифровым
            ландшафтам.
          </p>
          <button className="join-button">Войти в сообшество</button>
        </div>
      </section>
      <Mission />
      <CommunitySection />
      <iframe
        width="100%"
        height="750px"
        src="https://cybermap.kaspersky.com/en/widget/dynamic/dark"
        frameborder="0"
      ></iframe>
    </>
  );
}
