import "./globals.css";
import "@fontsource/fredoka/600.css";
import "@fontsource/fredoka/700.css";
import "@fontsource/lilita-one/400.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/nunito-sans/800.css";
import type { Metadata } from "next";
import ClientLayout from "@/components/client-layout";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  ""
);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  colorScheme: "only light",
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
        url: "/mohammadyassine.jpeg",
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
    images: ["/mohammadyassine.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#05081c",
  other: {
    "supported-color-schemes": "light",
  },
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
