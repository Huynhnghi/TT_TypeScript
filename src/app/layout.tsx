
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Header />
        {children} 
        <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000, 
          style: { minWidth: '300px', textAlign: 'center' },
        }}
      />
        <Footer />
      </body>
    </html>
  );
}
