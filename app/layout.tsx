import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nasywa — Professional Portfolio",
  description: "Visual Stories, Personality Craft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}