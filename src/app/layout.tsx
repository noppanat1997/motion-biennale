import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "../components/layout/Header";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Architecture Studio",
  description: "Modern architectural design studio creating inspiring spaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
