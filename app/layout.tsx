import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PlanProvider } from "./context/planProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Home - Canada.ca",
  description: "Home page for Canada.ca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PlanProvider>
          {children}
        </PlanProvider>
      </body>
    </html>
  );
}
