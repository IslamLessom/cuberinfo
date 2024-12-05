"use client";
import { I18nextProvider } from "react-i18next";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./layout.scss";
import i18n from "../i18n/i18n";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <I18nextProvider i18n={i18n}>
          <div className="layout">
            <Header />
            <div className="main">{children}</div>
            <Footer />
          </div>
        </I18nextProvider>
      </body>
    </html>
  );
}
