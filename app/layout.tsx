import "./globals.css";
import type { Metadata } from "next";
import { Inter, DM_Sans, JetBrains_Mono } from "next/font/google";
import ClientLayout from "@/components/client-layout";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  ""
);

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mohammad Yassine — Full-Stack Software Engineer",
    template: "%s | Mohammad Yassine",
  },
  description:
    "Full-stack software engineer with 5+ years of experience shipping production web and mobile applications across the full stack, from database schema and API architecture to cloud deployment and CI/CD.",
  keywords: [
    "Mohammad Yassine",
    "Full-Stack Software Engineer",
    "React",
    "Next.js",
    "React Native",
    "Laravel",
    "Node.js",
    "TypeScript",
    "Supabase",
    "WebSockets",
    "Cloudflare",
    "Portfolio",
  ],
  authors: [{ name: "Mohammad Yassine" }],
  creator: "Mohammad Yassine",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Mohammad Yassine — Full-Stack Software Engineer",
    description:
      "Portfolio of Mohammad Yassine, a full-stack engineer specializing in production web and mobile applications.",
    siteName: "Mohammad Yassine Portfolio",
    images: [
      {
        url: "/MOHAMMADYASSINE.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Yassine Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Yassine — Full-Stack Software Engineer",
    description:
      "Portfolio of Mohammad Yassine, building production products with React, Next.js, React Native, Laravel, and Node.js.",
    images: ["/MOHAMMADYASSINE.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060608" },
    { media: "(prefers-color-scheme: light)", color: "#f8f8f6" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
