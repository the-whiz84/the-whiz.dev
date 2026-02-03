import { Hero, SectionDivider, Projects, Experience, Certifications, Skills } from "@/components";

async function getGithubStats() {
  try {
    const res = await fetch("https://api.github.com/users/the-whiz84", {
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) throw new Error("Failed to fetch");
    
    const data = await res.json();
    return data.public_repos;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return undefined;
  }
}

export default async function Home() {
  const repoCount = await getGithubStats();

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden w-full font-mono selection:bg-primary selection:text-white">
      <Hero repoCount={repoCount} />
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
