"use client";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./home/Page";

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
