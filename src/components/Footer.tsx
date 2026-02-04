"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp, Mail } from "lucide-react";
import { socials } from "@/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github,
  Linkedin,
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

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pb-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-4">
          {/* Left Side: Brand + Scroll to Top */}
          <div className="flex items-center gap-6">
            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex p-3 rounded-full glass hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">
                <span className="text-foreground">The-</span>
                <span className="gradient-text">Whiz.dev</span>
              </h2>
              <p className="text-muted-foreground max-w-sm">
                Crafted with ❤️ by AI Agents. (I just supervised)
              </p>
            </div>
          </div>

          {/* Right Side: Connect & Contact */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="flex flex-col items-center md:items-end space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Connect with me</h3>
              
              <div className="flex items-center gap-6">
                 {/* Social Links */}
                <div className="flex gap-3">
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

                {/* Contact Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="mailto:radu@the-whiz.dev"
                    className="btn-primary inline-flex items-center gap-3 px-6 py-3"
                  >
                    <Mail size={18} className="group-hover:rotate-12 transition-transform duration-300 text-white" />
                    <span>Get <span className="gradient-text">In Touch</span></span>
                    <div className="absolute inset-0 rounded-full bg-white/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Centered */}
        <div className="pt-2 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-muted-foreground text-base">
            <p>© {currentYear} Radu Chiriac. All rights reserved.</p>
            <span className="hidden md:inline">•</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
