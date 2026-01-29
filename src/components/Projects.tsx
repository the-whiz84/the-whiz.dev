"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data";

// Map image paths to live preview screenshots
const previewImages: Record<string, string> = {
  "/assets/img/blog.png": "/assets/img/previews/blog_preview.png",
  "/assets/img/organize-it.png": "/assets/img/previews/todo_preview.png",
  "/assets/img/shop.png": "/assets/img/previews/shop_preview.png",
};

export function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-[-200px] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-200px] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">What I&apos;ve built</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="gradient-text text-glow">Projects</span>
          </h2>
        </motion.div>

        {/* 2x2 Grid layout for better balance */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => {
            const previewImage = previewImages[project.image] || project.image;
            const isGithub = project.link.includes("github");

            return (
              <motion.div
                key={project.title}
                id={`project-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full glass rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col">
                  {/* Preview Image - larger aspect ratio */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={previewImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                    {/* Overlay with buttons on hover - refined */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
                      <Link
                        href={project.link}
                        target="_blank"
                        className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-medium transition-all duration-300 hover:scale-105 transform translate-y-4 group-hover:translate-y-0"
                      >
                        {isGithub ? (
                          <>
                            <Github size={20} />
                            View Code
                          </>
                        ) : (
                          <>
                            <ExternalLink size={20} />
                            Live Preview
                          </>
                        )}
                      </Link>
                    </div>
                  </div>

                  {/* Content - more padding and better hierarchy */}
                  <div className="p-8 lg:p-10 flex flex-col flex-grow">
                    <h3 className="font-bold text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2.5 mt-auto">
                      {getTechTags(project.description).map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 rounded-full bg-secondary border border-white/5 text-muted-foreground text-sm font-medium group-hover:border-primary/30 group-hover:text-primary/90 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Helper function to extract tech tags from description
function getTechTags(description: string): string[] {
  const techKeywords = [
    "Python",
    "Flask",
    "Bootstrap",
    "SQLAlchemy",
    "PostgreSQL",
    "Stripe",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
  ];

  return techKeywords.filter((tech) =>
    description.toLowerCase().includes(tech.toLowerCase())
  );
}
