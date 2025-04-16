import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React
import { cn } from "@/lib/utils";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "snapLaunch",
  description:
    "Open Source Alternative to ShipFast - Launch your startup in days Not in weeks",
  keywords: [
    "saas",
    "boilerplate",
    "open source",
    "free",
    "open source shipfast",
    "snapLaunch",
    "idee8",
    "made by idee8",
    "free boilerplate",
    "github",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(bricolageGrotesque.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
