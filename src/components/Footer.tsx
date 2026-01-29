"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Twitter, ArrowUp } from "lucide-react";
import { socials } from "@/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github,
  Linkedin,
  Facebook,
  Twitter,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-background to-background" />
      
      {/* Subtle glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-[100px] rounded-full" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 p-4 rounded-full glass hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>

{/* Brand and Tagline removed as requested */}

          {/* Social Links */}
          <div className="flex gap-3 mb-12">
            {socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <motion.div key={social.name} whileHover={{ scale: 1.1, y: -2 }}>
                  <Link
                    href={social.url}
                    target="_blank"
                    aria-label={social.name}
                    className="flex items-center justify-center w-12 h-12 rounded-full glass hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    {Icon && <Icon size={20} />}
                  </Link>
                </motion.div>
              );
            })}
          </div>

{/* Navigation Links removed as requested */}

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-muted-foreground/60 text-xs">
            © {currentYear} Radu Chiriac. Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
