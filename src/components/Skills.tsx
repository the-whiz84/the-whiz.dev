"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Code,
  ShieldCheck,
  Headset,
  GitBranch,
  GitMerge,
  Cloud,
  Globe,
} from "lucide-react";
import { skills } from "@/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Terminal,
  Code,
  ShieldCheck,
  Headset,
  GitBranch,
  GitMerge,
  Cloud,
  Globe,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-12 overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-transparent" />
      
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text text-glow">Technologies</span>
          </h2>
          <p className="text-primary font-mono text-xl md:text-2xl tracking-widest uppercase mb-48">My Arsenal</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    {Icon && <Icon size={28} className="text-primary group-hover:text-white transition-colors" />}
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
