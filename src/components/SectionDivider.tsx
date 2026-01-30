"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative py-4 md:py-6 overflow-hidden">
      {/* Central gradient line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-64 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
      />
      
      {/* Glowing orb in center */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(167,139,250,0.8)]" />
      </motion.div>

      {/* Subtle side gradients */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </div>
  );
}
