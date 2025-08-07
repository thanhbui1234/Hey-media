"use client";
import Header from "@/app/components/Layouts/Header";
import { Toaster } from "sonner";
import Footer from "../components/Layouts/Footer";
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d]">
      {/* Header */}
      <Header />

      {/* Main content */}
      <Toaster richColors position="top-center" />
      <main className="">{children}</main>

      {/* <SlideFoot /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
