"use client";

import { usePathname } from "next/navigation";
import { Navbar, Footer } from "@/components";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Don't show global navbar/footer on V2 page
  // V2 page has its own complete layout
  const isLegacyPage = pathname?.startsWith("/v2");
  
  if (isLegacyPage) {
    return <>{children}</>;
  }
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
