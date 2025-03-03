import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";
import "./styles/globals.scss";

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin", "cyrillic"],
});

const roboto = Roboto({
  variable: "--font-roboto",
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
        className={`${manropeSans.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
