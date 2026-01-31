"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, Twitter, MapPin, ArrowRight, Home, Briefcase, Code2, Award, Mail } from "lucide-react";
import { profile, socials, skills, experience, education, projects, certifications } from "@/data";

const socialIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
};

// V2 Color Palette from Material Kit
const colors = {
  primary: "#e91e63",      // Rose/Magenta  
  info: "#1A73E8",         // Blue
  success: "#2DCE89",      // Mint Green  
  warning: "#fb8c00",      // Orange
  dark: "#262626",         // Dark gray
  darkBg: "#1a1a1a",       // Near black background
};

export default function V2Page() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <div 
      className="min-h-screen text-white"
      style={{ backgroundColor: colors.darkBg }}
    >
      {/* Fixed Navbar - Material Kit Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-white font-medium">Zero-Dawn v2.0</span>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#" className="flex items-center gap-1 text-white/80 hover:text-white">
              <Home size={14} /> Home
            </Link>
            <Link href="#projects" className="flex items-center gap-1 text-white/80 hover:text-white">
              <Code2 size={14} /> Projects
            </Link>
            <Link href="#experience" className="flex items-center gap-1 text-white/80 hover:text-white">
              <Briefcase size={14} /> Experience
            </Link>
            <Link href="#skills" className="flex items-center gap-1 text-white/80 hover:text-white">
              <Code2 size={14} /> Skills
            </Link>
            <Link href="#certifications" className="flex items-center gap-1 text-white/80 hover:text-white">
              <Award size={14} /> Certifications
            </Link>
            <Link href="#contact" className="flex items-center gap-1 text-white/80 hover:text-white">
              <Mail size={14} /> Contact Me
            </Link>
          </div>
          <Link
            href="/"
            className="px-4 py-1.5 rounded text-sm font-medium text-white"
            style={{ backgroundColor: colors.success }}
          >
            Home
          </Link>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <header
        className="min-h-[75vh] relative bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/img/bg-magic.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        
        <div className="relative z-10 text-center px-6 py-20 mt-16">
          {/* Profile Image - Large Portrait Style */}
          <div className="flex justify-center mb-6">
            <div className="overflow-hidden" style={{ width: '300px', height: '400px' }}>
              <Image
                src="/assets/img/profile-new.png"
                alt={profile.name}
                width={300}
                height={400}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>
          </div>

          <p className="font-medium mb-2" style={{ color: colors.primary }}>
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
            {profile.name.toUpperCase()}
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            {profile.tagline}
          </p>

          {/* Social Links with Circular Backgrounds */}
          <p className="text-white mb-3 text-sm font-medium">Find me on</p>
          <div className="flex justify-center gap-3 mb-8">
            {socials.map((social) => {
              const Icon = socialIconMap[social.icon];
              const iconBgColors: Record<string, string> = {
                Github: "#333333",
                Linkedin: colors.warning,
                Twitter: "#0dcaf0",
              };
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  style={{ backgroundColor: iconBgColors[social.icon] || "#333333" }}
                >
                  {Icon && <Icon size={18} className="text-white" />}
                </Link>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={profile.resumeUrl}
              target="_blank"
              className="px-6 py-2 border-2 border-white text-white rounded font-medium hover:bg-white hover:text-gray-900 transition-colors text-sm"
            >
              View Resume
            </Link>
            <Link
              href={profile.locationUrl}
              target="_blank"
              className="px-6 py-2 text-white/80 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <MapPin size={16} />
              {profile.location}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <div className="py-8">
        {/* Projects Section */}
        <section id="projects" className="py-20 flex justify-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-semibold mb-12 pb-3 border-b border-white/20">
              Check my latest Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h5 className="font-semibold text-white/90 mb-2 group-hover:text-white transition-colors">
                    <Link href={project.link} target="_blank">
                      {project.title}
                    </Link>
                  </h5>
                  <p className="text-white/50 text-sm mb-3 line-clamp-3">{project.description}</p>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    style={{ color: "#0dcaf0" }}
                  >
                    {project.linkLabel} <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience/Education Tabs */}
        <section id="experience" className="py-20 flex justify-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            {/* Tab Buttons - Material Kit Style */}
            <div className="flex justify-center mb-12">
              <div 
                className="inline-flex rounded-lg p-1"
                style={{ backgroundColor: colors.primary }}
              >
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`px-8 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === "experience" 
                      ? "bg-white shadow-md" 
                      : "text-white/90 hover:text-white"
                  }`}
                  style={{
                    color: activeTab === "experience" ? colors.primary : undefined,
                  }}
                >
                  My Experience
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`px-8 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === "education" 
                      ? "bg-white shadow-md" 
                      : "text-white/90 hover:text-white"
                  }`}
                  style={{
                    color: activeTab === "education" ? colors.primary : undefined,
                  }}
                >
                  Education
                </button>
              </div>
            </div>

            {/* Experience Tab Content */}
            {activeTab === "experience" && (
              <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                <div>
                  <h3 className="text-2xl font-semibold">Work Experience</h3>
                </div>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="flex gap-4 p-4">
                      <div className="w-14 h-14 flex-shrink-0 bg-white rounded-lg overflow-hidden flex items-center justify-center shadow-md">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">{exp.role}</h5>
                        <p className="text-white/60 text-sm mb-2">{exp.company}: {exp.period}</p>
                        <ul className="text-white/50 text-sm space-y-1">
                          {exp.accomplishments.slice(0, 3).map((acc, i) => (
                            <li key={i}>• {acc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Tab Content */}
            {activeTab === "education" && (
              <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                <div>
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="flex gap-4 p-4">
                      <div className="w-14 h-14 flex-shrink-0 bg-white rounded-lg overflow-hidden flex items-center justify-center shadow-md">
                        {edu.logo ? (
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        ) : (
                          <span className="text-2xl">🎓</span>
                        )}
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">{edu.degree}</h5>
                        <p className="text-white/60 text-sm mb-2">{edu.institution}: {edu.period}</p>
                        <ul className="text-white/50 text-sm space-y-1">
                          {edu.details.map((detail, i) => (
                            <li key={i}>• {detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 flex justify-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-12 pb-3 border-b border-white/20">
              Skills and Technologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex gap-4">
                  <div 
                    className="w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(195deg, #49a3f1, ${colors.info})`,
                    }}
                  >
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{skill.name}</h3>
                    <p className="text-white/50 text-sm">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 flex justify-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-12 pb-3 border-b border-white/20">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index}>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={128}
                      height={128}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-white/50 text-sm mb-4">{cert.description}</p>
                  <Link
                    href={cert.link}
                    target="_blank"
                    className="inline-block px-4 py-2 rounded text-white text-sm font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: colors.primary }}
                  >
                    View details »
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer - Material Kit Style */}
      <footer className="py-12 px-6 text-center" style={{ backgroundColor: colors.darkBg }}>
        <div className="flex justify-center gap-8 mb-6 text-sm">
          <Link href="#" style={{ color: colors.success }} className="hover:underline">
            Home
          </Link>
          <Link href="#projects" style={{ color: colors.success }} className="hover:underline">
            Projects
          </Link>
          <Link href="#experience" style={{ color: colors.success }} className="hover:underline">
            Experience
          </Link>
          <Link href="#skills" style={{ color: colors.success }} className="hover:underline">
            Skills
          </Link>
          <Link href="#certifications" style={{ color: colors.success }} className="hover:underline">
            Certifications
          </Link>
        </div>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          {socials.map((social) => {
            const Icon = socialIconMap[social.icon];
            return (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                className="text-white/40 hover:text-white/60 transition-colors"
              >
                {Icon && <Icon size={20} />}
              </Link>
            );
          })}
        </div>
        
        <p className="text-sm" style={{ color: colors.primary }}>
          Copyright © 2025 Zero-Dawn v2.0 by Radu Chiriac.
        </p>
      </footer>
    </div>
  );
}
