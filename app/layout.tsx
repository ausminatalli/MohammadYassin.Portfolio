import "./globals.css";
import { Inter, DM_Sans, JetBrains_Mono } from "next/font/google";
import ClientLayout from "@/components/client-layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400"],
});

export const metadata = {
  title: "Mohammad Yassine — Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with 5+ years experience. Building scalable web applications with React, Next.js, Laravel, and cloud solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
