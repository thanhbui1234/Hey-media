import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.heymediavn.com"),
  title: {
    default: "Hey Media",
    template: "%s | Hey Media"
  },
  description:
    "Hey Media - Đơn vị sản xuất phim, TVC, video marketing chuyên nghiệp. Dịch vụ quay phim, chụp ảnh, livestream cho doanh nghiệp tại Việt Nam.",
  keywords: [
    "Hey Media",
    "sản xuất phim",
    "TVC",
    "video marketing",
    "quay phim doanh nghiệp",
    "chụp ảnh sản phẩm",
    "livestream",
    "video TVC",
    "quảng cáo TVC",
    "制作视频"
  ],
  authors: [{ name: "Hey Media", url: "https://www.heymediavn.com" }],
  creator: "Hey Media",
  publisher: "Hey Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/img/logodemo.jpg" },
      { url: "/img/logodemo.jpg", sizes: "32x32", type: "image/png" },
      { url: "/img/logodemo.jpg", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/img/logodemo.jpg" },
      { url: "/img/logodemo.jpg", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/img/logodemo.jpg",
  },
  openGraph: {
    title: "Hey Media - Sản xuất phim, TVC & Video Marketing chuyên nghiệp",
    description:
      "Hey Media - Đơn vị sản xuất phim, TVC, video marketing chuyên nghiệp. Dịch vụ quay phim, chụp ảnh, livestream cho doanh nghiệp tại Việt Nam.",
    url: "https://www.heymediavn.com",
    siteName: "Hey Media",
    images: [
      {
        url: "/img/logodemo.jpg",
        width: 1200,
        height: 630,
        alt: "Hey Media - Sản xuất phim & Video Marketing",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hey Media - Sản xuất phim, TVC & Video Marketing chuyên nghiệp",
    description:
      "Hey Media - Đơn vị sản xuất phim, TVC, video marketing chuyên nghiệp. Dịch vụ quay phim, chụp ảnh, livestream cho doanh nghiệp.",
    images: ["/img/logodemo.jpg"],
    creator: "@heymedia",
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
  alternates: {
    canonical: "https://www.heymediavn.com",
  },
  // Replace with actual Google Search Console verification code
  verification: {
    google: "your-actual-google-verification-code",
  },
  category: "business",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hey Media",
  url: "https://www.heymediavn.com",
  logo: "https://www.heymediavn.com/img/logodemo.jpg",
  description: "Đơn vị sản xuất phim, TVC, video marketing chuyên nghiệp",
  address: {
    "@type": "PostalAddress",
    addressCountry: "VN",
    addressLocality: "Hanoi"
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["vi", "en"]
  },
  sameAs: [
    // Add your social media profiles here
    // "https://www.facebook.com/heymedia",
    // "https://www.youtube.com/@heymedia",
    // "https://www.linkedin.com/company/heymedia"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}