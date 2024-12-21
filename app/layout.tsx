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
  title: "AxirzERP",
  description: "The enterprise standard ERP for seamless office and resource management.",
  keywords: ["ERP", "enterprise software", "business management", "axirz"],
  authors: [{ name: "axirz Group ", url: "https://axirz.com" }],
  openGraph: {
    title: "Axirz - Enterprise ERP",
    description:
      "Optimize your office and business operations with axirz, the leading enterprise ERP solution.",
    url: "https://axirz.com",
    siteName: "aXirz",
    type: "website",
    images: [
      {
        url: "https://axirz.com/images/.png",//will change this later and put a real image
        width: 1200,
        height: 630,
        alt: "axirz ERP Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axirz - Enterprise ERP",
    description:
      "Simplify your business operations with Axirz. The enterprise ERP designed for growth.",
    images: ["https://ekilie.com/images/ekiliflow-preview.png"],//will change this later and put a real image
  },
  // viewport: "width=device-width, initial-scale=1.0",
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
        <link rel="canonical" href="https://axirz.com" />
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
