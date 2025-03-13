import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./styles/globals.scss";

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "AI center",
  description: "AI center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${manropeSans.variable} antialiased bg-neutral-bg-surface`}
      >
        {children}
      </body>
    </html>
  );
}
