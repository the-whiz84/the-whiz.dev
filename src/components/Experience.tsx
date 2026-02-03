"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data";

interface TimelineItemProps {
  index: number;
  isLeft: boolean;
  children: React.ReactNode;
}

function TimelineItem({ index, isLeft, children }: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Connector line */}
      <div
        className={`hidden md:block absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent ${
          isLeft ? "left-1/2 -translate-x-1/2" : "left-1/2 -translate-x-1/2"
        }`}
      />

      <div className={`flex items-center gap-8 ${isLeft ? "md:flex-row-reverse" : ""}`}>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex-1"
        >
          {children}
        </motion.div>

        {/* Timeline dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="relative z-10 hidden md:flex"
        >
          <div className="timeline-dot">
            <span className="text-sm">{index + 1}</span>
          </div>
        </motion.div>

        {/* Spacer for opposite side */}
        <div className="hidden md:block flex-1" />
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden flex flex-col items-center" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-xl md:text-2xl tracking-widest uppercase flex items-center justify-center gap-3 text-center"
            style={{ marginBottom: "3rem" }}
          >
            <Briefcase className="text-primary" size={28} />
            Operational History
          </motion.h3>

          <div className="space-y-8 relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted -translate-x-1/2" />

            {experience.map((item, index) => (
              <TimelineItem key={`${item.company}-${item.role}-${index}`} index={index} isLeft={index % 2 === 0}>
                <div className="glass rounded-2xl p-6 hover:glow transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-card flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.logo}
                        alt={item.company}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-lg text-foreground">{item.role}</h4>
                      <p className="text-primary text-sm font-medium">{item.company}</p>
                      <p className="text-muted-foreground text-xs mt-1">{item.period}</p>
                      <ul className="mt-4 space-y-2">
                        {item.accomplishments.map((acc, accIndex) => (
                          <li key={accIndex} className="text-muted-foreground text-sm flex gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{acc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TimelineItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
