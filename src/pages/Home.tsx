import { motion } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import { profile, projects, skills, socials, experience, certifications } from '../data'
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Menu, X, Download } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github, Linkedin, Twitter
}

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
]

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const sectionRatios = useRef<Record<string, number>>({})
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      setIsScrolled(container.scrollTop > 50)
      if (container.scrollTop < 100) {
        setActiveSection('')
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRatios.current[entry.target.id] = entry.intersectionRatio
        })

        const activeId = Object.keys(sectionRatios.current).reduce((a, b) =>
          sectionRatios.current[a] > sectionRatios.current[b] ? a : b
        )

        if (sectionRatios.current[activeId] > 0) {
          setActiveSection(activeId)
        }
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        rootMargin: '-20% 0px -20% 0px',
        root: container
      }
    )

    container.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    container.addEventListener('scroll', handleScroll)
    return () => {
      container.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto bg-black text-white scroll-smooth"
      style={{ fontFamily: "'Clash Display', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Monument+Extended:wght@400;700&display=swap');

        .font-monument { font-family: 'Monument Extended', 'Clash Display', sans-serif; }
        .font-clash { font-family: 'Clash Display', sans-serif; }

        .text-stroke {
          -webkit-text-stroke: 2px white;
          color: transparent;
        }

        .text-stroke-orange {
          -webkit-text-stroke: 2px #f97316;
          color: transparent;
        }
      `}</style>

      {/* Fixed Navbar with Section Highlighting */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-md py-2'
            : 'bg-transparent py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div 
            className="cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/assets/img/navbar-logo-symbol.png" 
              alt="The Whiz" 
              className="h-16 w-auto hover:opacity-80 transition-opacity" 
            />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`font-clash text-sm tracking-wider px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-orange-500 text-black'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    {item.label.toUpperCase()}
                  </button>
                </li>
              )
            })}
            {/* V1 & V2 Links moved here */}
            <li>
              <a
                href="https://v1.the-whiz.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-clash text-sm tracking-wider px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-300"
              >
                V1
              </a>
            </li>
            <li>
              <a
                href="https://v2.the-whiz.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-clash text-sm tracking-wider px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-300"
              >
                V2
              </a>
            </li>
          </ul>

          {/* Social Icons + V1/V2 Links */}
          <div className="hidden md:flex items-center gap-4">
            {socials.map((s) => {
              const Icon = iconMap[s.icon]
              return Icon ? (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ) : null
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-4"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left font-clash py-3 border-b border-zinc-800 ${
                  activeSection === item.href.substring(1)
                    ? 'text-orange-500'
                    : 'text-zinc-300'
                }`}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
            <a
              href="https://v1.the-whiz.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left font-clash py-3 border-b border-zinc-800 text-zinc-300 hover:text-orange-500"
            >
              V1 WEBSITE
            </a>
            <a
              href="https://v2.the-whiz.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left font-clash py-3 border-b border-zinc-800 text-zinc-300 hover:text-orange-500"
            >
              V2 WEBSITE
            </a>
            <div className="flex gap-4 pt-4">
              {socials.map((s) => {
                const Icon = iconMap[s.icon]
                return Icon ? (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5 text-zinc-400" />
                  </a>
                ) : null
              })}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero — Full Viewport Typography */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="font-monument text-[10vw] md:text-[12vw] leading-[0.85] tracking-tighter">
            <span className="block text-stroke">RADU</span>
            <span className="block text-orange-500">CHIRIAC</span>
          </h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3, duration: 1 }}
             className="font-clash text-zinc-400 text-lg md:text-2xl mt-6 tracking-wide"
          >
            HPC ENGINEER AT <a href="https://www.bull.com" target="_blank" rel="noreferrer" className="text-orange-500 hover:text-white transition-colors">BULL</a> AND HOBBYST DEVELOPER
          </motion.p>
          <motion.a
            href={profile.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="block text-zinc-500 font-clash text-sm mt-2 hover:text-orange-500 transition-colors"
          >
            {profile.location.toUpperCase()}
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-24 text-zinc-500 font-clash text-lg tracking-wider"
        >
          SCROLL TO EXPLORE
        </motion.p>

        <motion.div
          className="absolute bottom-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent" />
        </motion.div>
      </section>

      {/* Projects Section — Right After Hero */}
      <section id="projects" className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-monument text-[10vw] md:text-[8vw] text-stroke mb-12"
          >
            PROJECTS
          </motion.h2>

          {/* Project Cards with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-monument text-lg group-hover:text-orange-500 transition-colors">
                      {project.title.toUpperCase()}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-orange-500" />
                  </div>
                  <p className="font-clash text-zinc-500 text-base line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-clash text-xs px-2 py-1 bg-zinc-800 text-zinc-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-monument text-[10vw] md:text-[8vw] text-stroke-orange mb-12"
          >
            EXPERIENCE
          </motion.h2>
          <div className="space-y-12">
            {experience.slice(0, 4).map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-4 border-zinc-800 hover:border-orange-500 pl-6 transition-all duration-500"
              >
                <span className="font-clash text-zinc-600 text-sm tracking-widest">
                  {exp.period}
                </span>
                <h3 className="font-monument text-2xl mt-2">{exp.role.toUpperCase()}</h3>
                <p className="font-clash text-orange-500 text-lg mt-1">{exp.company}</p>
                <ul className="mt-4 space-y-2">
                  {exp.accomplishments.map((acc, j) => (
                    <li key={j} className="font-clash text-zinc-500 text-base">
                      • {acc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-monument text-[10vw] md:text-[8vw] text-stroke mb-12"
          >
            SKILLS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 border border-zinc-800 hover:border-orange-500 transition-all duration-500"
              >
                <h3 className="font-monument text-xl mb-3 group-hover:text-orange-500 transition-colors">
                  {skill.name.toUpperCase()}
                </h3>
                <p className="font-clash text-zinc-500 group-hover:text-zinc-300 transition-colors text-base">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-monument text-[10vw] md:text-[8vw] text-stroke-orange mb-12"
          >
            CERTS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 border border-zinc-800 hover:border-orange-500 transition-all duration-500 flex flex-col items-center text-center"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-20 h-20 object-contain mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-monument text-base mb-2 group-hover:text-orange-500 transition-colors">
                  {cert.title.toUpperCase()}
                </h3>
                <p className="font-clash text-zinc-500 text-base">{cert.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-10 px-8 border-t border-zinc-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
            <div className="text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-monument text-3xl md:text-4xl text-orange-500 mb-4"
              >
                LET'S CONNECT
              </motion.h2>
              <p className="font-clash text-zinc-400 text-base max-w-md">
                {profile.tagline}
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 md:justify-end"
            >
              <a
                href={profile.resumeUrl}
                className="font-clash text-sm px-8 py-4 border border-zinc-800 bg-zinc-900/50 text-white hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-300 flex items-center gap-3"
              >
                <Download className="w-4 h-4" /> DOWNLOAD CV
              </a>
              <a
                href="mailto:contact@the-whiz.dev"
                className="font-clash text-sm px-8 py-4 bg-white text-black hover:bg-orange-500 transition-all duration-300 flex items-center gap-3"
              >
                <Mail className="w-4 h-4" /> SEND EMAIL
              </a>
            </motion.div>
          </div>

          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="font-clash text-zinc-600 text-xs tracking-wider">
                © 2026 RADU CHIRIAC. ALL RIGHTS RESERVED.
              </p>
              <a href="/privacy" className="font-clash text-zinc-600 hover:text-orange-500 text-xs tracking-wider transition-colors">
                PRIVACY POLICY
              </a>
            </div>

            <div className="flex items-center gap-4">
              {socials.map((s) => {
                const Icon = iconMap[s.icon]
                return Icon ? (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-orange-500 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ) : null
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
