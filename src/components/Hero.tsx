"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, FileText, Github, Linkedin, Facebook, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import { profile, socials, projects } from "@/data";
import { useState, useEffect, useCallback, useRef } from "react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github,
  Linkedin,
  Facebook,
  Twitter,
};

export function Hero() {
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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Gradient - Subtle dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                            linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        {/* Centered Profile Section */}
        <div className="flex flex-col items-center text-center mb-20">
          {/* Profile Image with Glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 mb-8"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-[-12px] rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-60 blur-2xl animate-pulse-glow" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-[4px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Name & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-primary font-semibold text-base md:text-lg tracking-widest uppercase">Hello, I&apos;m</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
              <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              {profile.tagline}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-3 mt-6"
          >
            {socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  aria-label={social.name}
                  className="p-3 rounded-full glass hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  {Icon && <Icon size={20} />}
                </Link>
              );
            })}
          </motion.div>

          {/* CTA Buttons with Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <Link
              href={profile.resumeUrl}
              target="_blank"
              className="btn-glow inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105"
            >
              <FileText size={18} />
              View Resume
            </Link>
            <Link
              href={profile.locationUrl}
              target="_blank"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass text-foreground font-medium hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              <MapPin size={18} />
              {profile.location}
            </Link>
          </motion.div>
        </div>

        {/* Project Carousel - separated from hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-5xl lg:max-w-6xl mx-auto mt-16 lg:mt-24"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full glass hover:bg-primary/20 text-foreground hover:text-primary transition-all duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full glass hover:bg-primary/20 text-foreground hover:text-primary transition-all duration-300"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden glass glow">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={false}
                  animate={{
                    opacity: currentProject === index ? 1 : 0,
                    scale: currentProject === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${currentProject === index ? "z-10" : "z-0 pointer-events-none"}`}
                >
                  <Link
                    href="#projects"
                    className="block relative h-full group"
                    onClick={() => {
                      // Store the clicked project index to highlight it in Projects section
                      sessionStorage.setItem("selectedProject", String(index));
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">{project.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentProject === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground"
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
