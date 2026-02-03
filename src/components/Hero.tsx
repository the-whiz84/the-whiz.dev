"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";
import TerminalStats from "@/components/ui/TerminalStats";

interface HeroProps {
  repoCount?: number;
}

export function Hero({ repoCount }: HeroProps) {
  const [text, setText] = useState("");
  const fullText = "Bridging Hardware, Code, and Cloud.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-start md:justify-center items-center relative overflow-hidden bg-background pt-40 pb-20">
      {/* Floating Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

      {/* Background Matrix/Grid Effect (Subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container px-4 text-center z-10">
        <div className="mb-6 inline-flex items-center space-x-2 text-primary/80 font-mono text-sm tracking-widest uppercase animate-fade-in-up">
           <Terminal size={14} />
           <span>System Ready</span>
        </div>

        <h1 className="text-6xl md:text-9xl font-bold font-mono tracking-tighter mb-6 text-white animate-scale-in">
          RADU CHIRIAC
        </h1>

        <div className="h-8 md:h-12 mb-12">
           <p className="text-xl md:text-3xl text-muted-foreground font-mono">
             {text}<span className="animate-pulse">_</span>
           </p>
        </div>

        <Link 
          href="#projects"
          onClick={scrollToProjects}
          className="btn-primary inline-flex items-center px-10 py-5 text-2xl md:text-3xl font-mono tracking-wider group cursor-pointer !border-2 !border-primary/60 hover:!border-primary"
        >
          <span>Run </span>
          <span className="gradient-text">{"./projects.sh"}</span>
        </Link>
      </div>

      <div className="container px-4 relative z-20 mt-12 mb-20">
        <TerminalStats repoCount={repoCount} />
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[200px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
