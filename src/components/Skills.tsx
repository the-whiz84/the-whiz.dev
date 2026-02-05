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
    <section id="skills" className="py-20 relative bg-background overflow-hidden">
      {/* Background Matrix Effect */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           className="mb-12 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-primary font-mono mb-2">
            <span className="text-xl">$</span>
            <span className="text-xl">cat ./skills.json</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
             Technical <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group border border-border bg-card/40 hover:bg-card/80 hover:border-primary transition-all duration-300 p-6 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-none group-hover:bg-primary/20 transition-colors">
                     {Icon && <Icon size={24} className="text-primary" />}
                  </div>
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                    v1.0
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white font-mono mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
