import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LayoutWrapper from "@/components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radu Chiriac | TheWhiz Portfolio",
  description: "Personal portfolio of Radu Chiriac - Tech enthusiast, Linux lover, Python developer, and HPC Technical Engineer based in Romania.",
  keywords: ["Radu Chiriac", "TheWhiz", "Portfolio", "Python Developer", "Linux", "HPC Engineer", "DevOps", "Web Development"],
  authors: [{ name: "Radu Chiriac" }],
  creator: "Radu Chiriac",
  metadataBase: new URL("https://the-whiz.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://the-whiz.dev",
    siteName: "TheWhiz Portfolio",
    title: "Radu Chiriac | TheWhiz Portfolio",
    description: "Personal portfolio of Radu Chiriac - Tech enthusiast, Linux lover, Python developer, and HPC Technical Engineer.",
    images: [
      {
        url: "/assets/img/profile-new.png",
        width: 400,
        height: 400,
        alt: "Radu Chiriac - TheWhiz",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Radu Chiriac | TheWhiz Portfolio",
    description: "Personal portfolio of Radu Chiriac - Tech enthusiast, Linux lover, and Python developer.",
    creator: "@the_whiz84",
    images: ["/assets/img/profile-old.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/favicon.png",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Radu Chiriac",
  alternateName: "TheWhiz",
  url: "https://the-whiz.dev",
  image: "https://the-whiz.dev/assets/img/profile-new.png",
  sameAs: [
    "https://github.com/the-whiz84",
    "https://www.linkedin.com/in/radu-chiriac/",
    "https://x.com/the_whiz84",
  ],
  jobTitle: "HPC Technical Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Bull Romania",
  },
  knowsAbout: ["Python", "Linux", "DevOps", "AWS", "Web Development", "HPC"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sibiu",
    addressCountry: "Romania",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
