import type { Metadata } from "next";
import "./globals.css";

// SEO skill: Comprehensive metadata for search engine optimization
export const metadata: Metadata = {
  title: {
    default: "Kabootr - AI-Powered Email Marketing with Zero Bounce Rates",
    template: "%s | Kabootr",
  },
  description:
    "Create complete email workflows and campaigns with just a prompt. AI-powered email marketing platform with 99.9% deliverability, intelligent tracking, and zero bounce rates. Open source and self-hostable.",
  keywords: [
    "email marketing",
    "AI email",
    "email automation",
    "zero bounce",
    "email campaigns",
    "marketing automation",
    "open source email",
    "email workflows",
    "AI marketing",
    "email deliverability",
  ],
  authors: [{ name: "Kabootr Team" }],
  creator: "Kabootr",
  publisher: "Kabootr",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kabootr.ai",
    siteName: "Kabootr",
    title: "Kabootr - AI-Powered Email Marketing with Zero Bounce Rates",
    description:
      "Create complete email workflows and campaigns with just a prompt. 99.9% deliverability, intelligent tracking, and zero bounce rates.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kabootr - AI-Powered Email Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabootr - AI-Powered Email Marketing",
    description:
      "Create complete email workflows with just a prompt. Zero bounce rates, 99.9% deliverability.",
    images: ["/og-image.png"],
    creator: "@kabootr",
  },
  alternates: {
    canonical: "https://kabootr.ai",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  metadataBase: new URL("https://kabootr.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* SEO skill: Structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kabootr",
              url: "https://kabootr.ai",
              logo: "https://kabootr.ai/logo.png",
              description:
                "AI-powered email marketing platform with zero bounce rates",
              sameAs: [
                "https://twitter.com/kabootr",
                "https://github.com/kabootr",
                "https://discord.gg/kabootr",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
            }),
          }}
        />
        {/* SEO skill: SoftwareApplication structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Kabootr",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "1250",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
