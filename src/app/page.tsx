import { Hero, Experience, Skills, Certifications, SectionDivider } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Certifications />
    </div>
  );
}
