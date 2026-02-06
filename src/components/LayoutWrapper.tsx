"use client";

import { usePathname } from "next/navigation";
import { Navbar, Footer } from "@/components";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
