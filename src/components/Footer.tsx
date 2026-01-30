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

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side: Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              <span className="text-foreground">the-whiz</span>
              <span className="text-muted-foreground">.dev</span>
            </h2>
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
                    className="group relative inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full font-bold text-base tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)]"
                  >
                    <Mail size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>Get In Touch</span>
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full glass hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 group mt-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Copyright - Centered & Larger */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-muted-foreground text-base">
            © {currentYear} Radu Chiriac. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
