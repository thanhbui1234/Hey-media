import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heymedia.vn"),
  title: {
    default: "Hey Media",
    template: "Hey Media"
  },
  description:
    "Hey Media - Đơn vị sản xuất phim, TVC, video marketing chuyên nghiệp. Dịch vụ quay phim, chụp ảnh, livestream cho doanh nghiệp.",
  keywords:
    "Hey Media, sản xuất phim, TVC, video marketing, quay phim doanh nghiệp, chụp ảnh, livestream",
  authors: [{ name: "Hey Media", url: "https://heymedia.vn" }],
  icons: {
    icon: "/img/logodemo.jpg",
    apple: "/img/logodemo.jpg",
  },
  openGraph: {
    title: "Hey Media",
    description:
      "Hey Media - Đơn vị sản xuất phim, TVC, video marketing chuyên nghiệp. Dịch vụ quay phim, chụp ảnh, livestream cho doanh nghiệp.",
    url: "https://heymedia.vn",
    siteName: "Hey Media",
    images: [
      {
        url: "/img/logodemo.jpg",
        width: 1433,
        height: 900,
        alt: "Hey Media",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hey Media",
    description:
      "Hey Media - Đơn vị sản xuất phim, TVC, video marketing chuyên nghiệp. Dịch vụ quay phim, chụp ảnh, livestream cho doanh nghiệp.",
    images: ["/img/Media.png"],
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
  verification: {
    google: "your-google-site-verification-code",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hey Media",
              url: "https://www.heymediavn.com",
              logo: "https://www.heymediavn.com/img/logodemo.jpg",
            }),
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
