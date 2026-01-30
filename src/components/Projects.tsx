"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data";
import { useState, useEffect, useCallback, useRef } from "react";

export function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextProject = useCallback(() => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  }, []);

  const prevProject = useCallback(() => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Auto-scroll with 6 second interval, pauses on hover
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextProject, 6000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextProject, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id="projects" className="relative overflow-hidden flex flex-col items-center" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      {/* Background */}
      <div className="absolute inset-0 bg-transparent" />
      
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text text-glow">Projects</span>
          </h2>
          <p className="text-primary font-mono text-xl md:text-2xl tracking-widest uppercase" style={{ marginBottom: "3rem" }}>Featured Work</p>
        </motion.div>

        {/* Project Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl lg:max-w-6xl mx-auto"
          style={{ marginLeft: "auto", marginRight: "auto" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative group/carousel">
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-[-20px] lg:left-[-60px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass hover:bg-primary/20 text-foreground hover:text-primary transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 translate-x-4 group-hover/carousel:translate-x-0"
              aria-label="Previous project"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-[-20px] lg:right-[-60px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass hover:bg-primary/20 text-foreground hover:text-primary transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0"
              aria-label="Next project"
            >
              <ChevronRight size={28} />
            </button>

            {/* Carousel Container */}
            <div className="relative aspect-video rounded-3xl overflow-hidden glass glow border border-white/10 shadow-2xl shadow-black/50">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={false}
                  animate={{
                    opacity: currentProject === index ? 1 : 0,
                    zIndex: currentProject === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full w-full group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1150px"
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
                    
                    {/* Project Details Overlay */}
                    <div className="absolute inset-0 p-6 md:p-12 lg:p-16 flex flex-col justify-end">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-3 max-w-2xl select-none">
                          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm md:text-xl leading-relaxed line-clamp-3 md:line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex shrink-0">
                          <Link
                            href={project.link}
                            target="_blank"
                            className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-primary text-white text-sm md:text-base font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-black/20"
                          >
                            {project.link.includes("github") ? <Github size={18} className="md:w-5 md:h-5" /> : <ExternalLink size={18} className="md:w-5 md:h-5" />}
                            {project.link.includes("github") ? "View Code" : "Live Preview"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentProject === index
                      ? "w-12 bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                      : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
