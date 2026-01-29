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
    <section id="projects" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-background to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* 2x2 Grid layout for better balance */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {projects.map((project, index) => {
            const previewImage = previewImages[project.image] || project.image;
            const isGithub = project.link.includes("github");

            return (
              <motion.div
                key={project.title}
                id={`project-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full glass rounded-3xl overflow-hidden hover:glow transition-all duration-500">
                  {/* Preview Image - larger aspect ratio */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={previewImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80" />

                    {/* Overlay with buttons on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-background/30">
                      <div className="flex gap-4">
                        <Link
                          href={project.link}
                          target="_blank"
                          className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105"
                        >
                          {isGithub ? (
                            <>
                              <Github size={18} />
                              View Code
                            </>
                          ) : (
                            <>
                              <ExternalLink size={18} />
                              Live Preview
                            </>
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Content - more padding */}
                  <div className="p-8 space-y-4">
                    <h3 className="font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags (parsed from description) */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {getTechTags(project.description).map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
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
