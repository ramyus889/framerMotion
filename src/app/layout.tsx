import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "/css/fontStyle.css";
import "/css/Uiverse.css";
import NavbarNextUi from "../componentsUi/NavbarNextUi";

const fontStyle = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Lessons",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={fontStyle.className}>
        <div className="overflow-x-hidden">
          <NavbarNextUi />
          {children}
        </div>
      </body>
    </html>
  );
}
