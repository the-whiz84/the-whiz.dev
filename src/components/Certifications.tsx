"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/data";

export function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden flex flex-col items-center" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      {/* Background */}
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
            My <span className="gradient-text text-glow">Certifications</span>
          </h2>
          <p className="text-primary font-mono text-xl md:text-2xl tracking-widest uppercase" style={{ marginBottom: "3rem" }}>Continuous Learning</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="relative h-full glass rounded-3xl p-8 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col items-center">
                <div className="relative w-32 h-32 mb-8 group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain rounded-full relative z-10"
                  />
                </div>
                
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{cert.description}</p>
                
                <Link
                  href={cert.link}
                  target="_blank"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3"
                >
                  <span>View <span className="gradient-text">details</span></span>
                  <ExternalLink size={16} className="text-primary" /> {/* Icon needs explicit color since it's not text */}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
