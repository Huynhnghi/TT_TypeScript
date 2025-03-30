"use client";

import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Container from "./home/page";

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Header />
        <Container />
        <Footer />
      </body>
    </html>
  );
}
