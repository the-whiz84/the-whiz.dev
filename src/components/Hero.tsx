"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, FileText, Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import { profile, socials } from "@/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Gradient - Subtle dark gradient */}
      <div className="absolute inset-0 bg-background" />

      {/* Floating Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        {/* Centered Profile Section */}
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with Glow */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-12 animate-scale-in">
            {/* Glow effect behind image */}
            <div className="absolute inset-[-20px] rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-40 blur-3xl animate-pulse-glow" />
            
            {/* Rotating ring */}
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-primary to-accent p-[2px] animate-spin-slow" style={{ animationDuration: '10s' }}>
               <div className="w-full h-full rounded-full bg-background" />
            </div>

            <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-br from-primary to-accent">
              <div className="w-full h-full rounded-full overflow-hidden bg-background relative">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Name & Tagline */}
          <div className="space-y-6 animate-fade-in-up delay-100">
            <p className="text-primary font-mono text-xl md:text-2xl lg:text-3xl tracking-[0.2em] uppercase">
              Hello, I&apos;m
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">
              <span className="gradient-text text-glow">{profile.name}</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground/80 mt-[-10px] mb-6">
              aka <span className="text-primary font-medium">The-Whiz</span>
            </p>
            <p className="text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              {profile.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-12 animate-fade-in-up delay-200">
            {socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  aria-label={social.name}
                  className="p-4 rounded-full glass hover:bg-primary/20 text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                >
                  {Icon && <Icon size={22} />}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons with Glow */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center mt-16 items-center animate-fade-in-up delay-300">
            <Link
              href={profile.resumeUrl}
              target="_blank"
              className="group flex items-center gap-3 text-muted-foreground font-light text-lg md:text-2xl hover:text-primary transition-colors duration-300"
            >
              <FileText size={24} className="group-hover:scale-110 transition-transform" />
              <span>View Resume</span>
            </Link>
            <Link
              href={profile.locationUrl}
              target="_blank"
              className="group flex items-center gap-3 text-muted-foreground font-light text-lg md:text-2xl hover:text-primary transition-colors duration-300"
            >
              <MapPin size={24} className="group-hover:scale-110 transition-transform" />
              <span>{profile.location}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up delay-400">
        <Link
          href="#projects"
          aria-label="Scroll to projects"
          className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown size={32} className="animate-bounce-down" />
        </Link>
      </div>
    </section>
  );
}
