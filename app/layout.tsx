import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata configuration
export const metadata: Metadata = {
  title: "ekiliFlow",
  description: "The enterprise standard ERP for seamless office and resource management.",
  keywords: ["ERP", "enterprise software", "business management", "ekiliFlow"],
  authors: [{ name: "Tachera Sasi", url: "https://flow.ekilie.com" }],
  openGraph: {
    title: "ekiliFlow - Enterprise ERP",
    description:
      "Optimize your office and business operations with ekiliFlow, the leading enterprise ERP solution.",
    url: "https://ekilie.com/ekiliflow",
    siteName: "ekiliFlow",
    type: "website",
    images: [
      {
        url: "https://ekilie.com/images/ekiliflow-preview.png",//will change this later and put a real image
        width: 1200,
        height: 630,
        alt: "ekiliFlow ERP Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ekiliFlow - Enterprise ERP",
    description:
      "Simplify your business operations with ekiliFlow. The enterprise ERP designed for growth.",
    images: ["https://ekilie.com/images/ekiliflow-preview.png"],//will change this later and put a real image
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://ekilie.com/favicon.ico"
          type="image/x-icon"
        />
        <link rel="canonical" href="https://ekilie.com/ekiliflow" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
