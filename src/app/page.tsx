import dynamic from "next/dynamic";
import { Hero, SectionDivider } from "@/components";

// Lazy load below-the-fold components
const Projects = dynamic(() => import("@/components").then((mod) => mod.Projects));
const Experience = dynamic(() => import("@/components").then((mod) => mod.Experience));
const Skills = dynamic(() => import("@/components").then((mod) => mod.Skills));
const Certifications = dynamic(() => import("@/components").then((mod) => mod.Certifications));

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
