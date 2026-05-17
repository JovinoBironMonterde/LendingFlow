import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LendFlow",
  description: "Loan Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex" style={{ backgroundColor: 'var(--main-bg)' }}>
        <Sidebar />
        {/* pb-16 on mobile to clear the fixed bottom tab bar */}
        <div className="flex-1 flex flex-col overflow-hidden pb-16 md:pb-0">
          {children}
        </div>
      </body>
    </html>
  );
}