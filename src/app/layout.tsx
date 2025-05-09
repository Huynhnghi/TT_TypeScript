
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Header />
        {children} {/* RENDER ĐÚNG PAGE TƯƠNG ỨNG */}
        <Footer />
      </body>
    </html>
  );
}
