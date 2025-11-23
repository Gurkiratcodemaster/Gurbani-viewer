import "./globals.css";
import localFont from "next/font/local";
import React from "react";

const gurmukhiFont = localFont({
  src: "../public/fonts/AnmolLipiRegular.ttf",
  variable: "--font-gurmukhi",
  display: "swap",
});

export const metadata = {
  title: "Gurbani Viewer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pa" className={gurmukhiFont.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
