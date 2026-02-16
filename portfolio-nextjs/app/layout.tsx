import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amrabbas.com"),
  title: {
    default: "Amr Abbas | Senior Product Designer - B2B SaaS & Enterprise UX",
    template: "%s | Amr Abbas",
  },
  description:
    "Amr Abbas - Senior Product Designer with 4+ years specializing in B2B SaaS and enterprise workflows. I turn complex operational processes into fast, low-error, scalable UX. 25+ products shipped.",
  keywords: [
    "Amr Abbas",
    "Product Designer",
    "Senior Product Designer",
    "B2B SaaS Designer",
    "Enterprise UX",
    "UX Designer Egypt",
    "Design Systems",
    "Dashboard Design",
    "CRM Design",
    "ERP Design",
    "Figma Expert",
    "UX Research",
    "Prototyping",
    "UI/UX Designer",
    "Portfolio",
  ],
  authors: [{ name: "Amr Abbas" }],
  creator: "Amr Abbas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amrabbas.com",
    siteName: "Amr Abbas Portfolio",
    title: "Amr Abbas - Senior Product Designer | B2B SaaS & Enterprise UX",
    description:
      "Senior Product Designer specializing in B2B SaaS and enterprise workflows. 4+ years turning complex processes into scalable UX. 25+ products shipped.",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Amr Abbas - UI/UX Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amr Abbas - Senior Product Designer | B2B SaaS & Enterprise UX",
    description:
      "Senior Product Designer specializing in B2B SaaS and enterprise workflows. 4+ years, 25+ products shipped.",
    images: ["/preview.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  other: {
    "geo.region": "EG",
    "geo.placename": "Egypt",
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f0ed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FEW5SKFSB7"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FEW5SKFSB7');
            `,
          }}
        />
        {/* LLMs.txt discovery for AI crawlers */}
        <link rel="alternate" type="text/plain" href="https://amrabbas.com/llms.txt" title="LLM-friendly content" />
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Amr Abbas",
              jobTitle: "Senior Product Designer",
              description:
                "Senior Product Designer with 4+ years specializing in B2B SaaS and enterprise workflows. Turning complex operational processes into fast, low-error, scalable UX.",
              url: "https://amrabbas.com",
              email: "amrm241020@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
              },
              sameAs: [
                "https://www.behance.net/amrabbas2410",
                "https://www.linkedin.com/in/amrm-abbas/",
                "https://github.com/amrm2410",
              ],
              knowsAbout: [
                "Product Design",
                "B2B SaaS",
                "Enterprise UX",
                "Dashboard Design",
                "Design Systems",
                "User Research",
                "Prototyping",
                "Figma",
                "Information Architecture",
                "Usability Testing",
                "CRM Design",
                "ERP Design",
                "Data Visualization",
                "SQL",
                "Power BI",
                "Tableau",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Senior Product Designer",
                occupationalCategory: "15-1255.00",
              },
              worksFor: {
                "@type": "Organization",
                name: "Cedar Rose",
                description: "Business intelligence and risk management company",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University",
                department: "Business Information Systems",
              },
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Advanced UX Design Certification",
                  credentialCategory: "Professional Certification",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Business Analysis Certification",
                  credentialCategory: "Professional Certification",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Amr Abbas Portfolio",
              url: "https://amrabbas.com",
              description: "Portfolio of Amr Abbas - Senior Product Designer",
              author: {
                "@type": "Person",
                name: "Amr Abbas",
              },
            }),
          }}
        />
      </head>
      <body className={`${outfit.className} ${jetbrainsMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
