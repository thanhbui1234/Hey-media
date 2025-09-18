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
  title: "Hey media",
  description: "Hey media ",
  icons: {
    icon: "/img/Media.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Hey media",
    description: "Hey media",
    url: "https://heymedia.vn", // đổi thành domain của bạn
    siteName: "Hey media",
    images: [
      {
        url: "https://i.postimg.cc/hjNwVsv2/Media.png", // ảnh preview khi share
        width: 1200,
        height: 630,
        alt: "Hey media preview",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hey media",
    description: "Hey media",
    images: ["https://i.postimg.cc/hjNwVsv2/Media.png"], // ảnh preview khi share lên Twitter
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
