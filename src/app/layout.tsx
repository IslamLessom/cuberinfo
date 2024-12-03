import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./layout.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Header />
          <div className="main">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
