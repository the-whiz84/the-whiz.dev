import { Hero, Projects, Experience, Skills, Certifications, SectionDivider } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden w-full">
      <Hero />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Certifications />
    </main>
  );
}
