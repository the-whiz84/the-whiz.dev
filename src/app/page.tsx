import { Hero, SectionDivider, Projects, Experience, Certifications, Skills } from "@/components";
import TerminalStats from "@/components/ui/TerminalStats";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden w-full font-mono selection:bg-primary selection:text-white">
      <Hero />
      <TerminalStats />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Certifications />
      {/* Footer is likely in LayoutWrapper or Layout */}
    </main>
  );
}
