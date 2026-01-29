"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/data";

export function Certifications() {
  return (
    <section id="certifications">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            My <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 text-center hover:glow transition-all duration-300 flex flex-col"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-4">{cert.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">{cert.description}</p>
              <Link
                href={cert.link}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View details
                <ExternalLink size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
