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
    <section id="skills" className="bg-secondary/30">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Skills and <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group glass rounded-2xl p-6 hover:glow transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {Icon && <Icon size={24} className="text-primary" />}
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{skill.name}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
