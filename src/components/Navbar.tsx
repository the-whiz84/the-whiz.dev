"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "V1", href: "https://v1.thewhiz.me", external: true },
  { label: "V2", href: "https://thewhiz.me", external: true },
  { label: "Experience", href: "#experience", external: false },
  { label: "Skills", href: "#skills", external: false },
  { label: "Certifications", href: "#certifications", external: false },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3 border-b border-white/5" : "py-5 bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative w-10 h-10 hover:scale-110 transition-transform duration-300">
          <Image 
            src="/assets/img/logo-new.png" 
            alt="TheWhiz Logo" 
            fill 
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                className="relative px-5 py-2.5 rounded-full text-muted-foreground hover:text-white transition-colors duration-200 text-sm font-medium group overflow-hidden"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/5"
          >
            <ul className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-base font-medium block py-3 px-4 hover:bg-white/5 rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
