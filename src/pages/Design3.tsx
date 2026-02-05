import { motion } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import { profile, projects, skills, experience, socials, certifications } from '../data'
import { Github, Linkedin, Twitter, ArrowRight, ExternalLink, Zap, Menu, X } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github, Linkedin, Twitter
}

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
]

function NeonCard({ 
  children, 
  glowColor = 'cyan',
  className = ''
}: { 
  children: React.ReactNode
  glowColor?: 'cyan' | 'pink' | 'purple'
  className?: string
}) {
  const glowMap = {
    cyan: 'shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] border-cyan-500/30',
    pink: 'shadow-[0_0_30px_rgba(255,0,128,0.3)] hover:shadow-[0_0_50px_rgba(255,0,128,0.5)] border-pink-500/30',
    purple: 'shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] border-purple-500/30',
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`bg-slate-900/80 backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 ${glowMap[glowColor]} ${className}`}
    >
      {children}
    </motion.div>
  )
}

function GlitchText({ children, className = '' }: { children: string; className?: string }) {
  return (
    <span className={`glitch-text relative ${className}`} data-text={children}>
      {children}
    </span>
  )
}

export default function Design3() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const sectionRatios = useRef<Record<string, number>>({})

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      if (window.scrollY < 100) {
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
        rootMargin: '-20% 0px -20% 0px'
      }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
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
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        
        .neon-cyan { color: #00ffff; text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff; }
        .neon-pink { color: #ff0080; text-shadow: 0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 40px #ff0080; }
        .neon-purple { color: #8b5cf6; text-shadow: 0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 40px #8b5cf6; }
        
        .glitch-text {
          position: relative;
        }
        .glitch-text:hover::before,
        .glitch-text:hover::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch-text:hover::before {
          animation: glitch-1 0.3s infinite;
          color: #00ffff;
          z-index: -1;
        }
        .glitch-text:hover::after {
          animation: glitch-2 0.3s infinite;
          color: #ff0080;
          z-index: -2;
        }
        
        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(20% 0 30% 0); transform: translate(-2px, 2px); }
          50% { clip-path: inset(50% 0 20% 0); transform: translate(2px, -2px); }
        }
        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(40% 0 20% 0); transform: translate(2px, -2px); }
          50% { clip-path: inset(10% 0 60% 0); transform: translate(-2px, 2px); }
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .scanline {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.1) 2px,
            rgba(0,0,0,0.1) 4px
          );
        }
      `}</style>

      {/* Grid Background */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
      <div className="fixed inset-0 scanline pointer-events-none opacity-50" />

      {/* Fixed Navbar with Section Highlighting */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/30 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`font-orbitron text-xs tracking-wider px-4 py-2 rounded transition-all duration-300 ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(0,255,255,0.3)]'
                        : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50'
                    }`}
                  >
                    {item.label.toUpperCase()}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex gap-3">
            {socials.map((s) => {
              const Icon = iconMap[s.icon]
              return Icon ? (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-cyan-500/30 rounded hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                </a>
              ) : null
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 border border-cyan-500/30 rounded"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/30 px-6 py-4"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left font-orbitron text-sm py-3 border-b border-slate-800 ${
                  activeSection === item.href.substring(1) ? 'text-cyan-400' : 'text-slate-300'
                }`}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
            <div className="flex gap-4 pt-4">
              {socials.map((s) => {
                const Icon = iconMap[s.icon]
                return Icon ? (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </a>
                ) : null
              })}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-rajdhani text-cyan-400 text-xl tracking-[0.3em] mb-6">WELCOME TO THE GRID</p>
            <h1 className="font-orbitron text-5xl md:text-8xl font-black">
              <GlitchText className="neon-cyan">{profile.name.split(' ')[0].toUpperCase()}</GlitchText>
              <br />
              <span className="neon-pink">{profile.name.split(' ')[1]?.toUpperCase()}</span>
            </h1>
            <p className="font-rajdhani text-xl text-slate-400 mt-8 max-w-2xl mx-auto">
              {profile.tagline}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <a 
              href={profile.resumeUrl}
              className="font-orbitron px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all flex items-center gap-2"
            >
              <Zap className="w-5 h-5" /> DOWNLOAD CV
            </a>
            <a 
              href={profile.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-orbitron px-6 py-3 border-2 border-pink-500 text-pink-400 font-bold rounded hover:bg-pink-500/10 hover:shadow-[0_0_30px_rgba(255,0,128,0.3)] transition-all"
            >
              LOCATE ME
            </a>
          </motion.div>
        </div>

        {/* Animated Line */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </section>

      {/* Projects Section — Right After Hero */}
      <section id="projects" className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-orbitron text-4xl font-bold mb-12"
          >
            <span className="neon-pink">PROJECTS</span>
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
                className="group"
              >
                <NeonCard 
                  glowColor={['pink', 'purple', 'cyan'][i % 3] as 'cyan' | 'pink' | 'purple'}
                  className="h-full"
                >
                  {/* Project Image */}
                  <div className="aspect-video rounded overflow-hidden mb-4 bg-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  
                  <h3 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:neon-cyan transition-all">
                    {project.title.toUpperCase()}
                  </h3>
                  <p className="font-rajdhani text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="font-orbitron text-xs px-2 py-1 border border-purple-500/30 text-purple-400 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-rajdhani text-cyan-400 flex items-center gap-2 text-sm">
                    <ExternalLink className="w-4 h-4" /> {project.linkLabel}
                  </span>
                </NeonCard>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-orbitron text-4xl font-bold mb-12"
          >
            <span className="neon-purple">CAPABILITIES</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <NeonCard 
                key={skill.name} 
                glowColor={['cyan', 'pink', 'purple'][i % 3] as 'cyan' | 'pink' | 'purple'}
              >
                <h3 className="font-orbitron text-sm font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
                  {skill.name.toUpperCase()}
                </h3>
                <p className="font-rajdhani text-slate-400 text-sm">{skill.description}</p>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-orbitron text-4xl font-bold mb-12"
          >
            <span className="neon-cyan">EXPERIENCE LOG</span>
          </motion.h2>
          <div className="space-y-6">
            {experience.slice(0, 4).map((exp, i) => (
              <NeonCard key={i} glowColor="cyan">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div>
                    <h3 className="font-orbitron text-lg font-bold neon-cyan">{exp.role.toUpperCase()}</h3>
                    <p className="font-rajdhani text-pink-400 text-lg">{exp.company}</p>
                  </div>
                  <span className="font-orbitron text-xs text-slate-500 border border-slate-700 px-3 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.accomplishments.map((acc, j) => (
                    <li key={j} className="font-rajdhani text-slate-400 flex items-start gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" /> {acc}
                    </li>
                  ))}
                </ul>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-orbitron text-4xl font-bold mb-12"
          >
            <span className="neon-purple">CERTIFICATIONS</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <NeonCard key={cert.title} glowColor="purple">
                <div className="flex items-start gap-4 mb-4">
                  <img src={cert.image} alt={cert.title} className="w-16 h-16 object-contain rounded bg-slate-800 p-2" />
                  <div>
                    <h3 className="font-orbitron text-xs font-bold text-white">{cert.title}</h3>
                    <p className="font-rajdhani text-slate-500 text-xs mt-1">{cert.description}</p>
                  </div>
                </div>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-rajdhani text-purple-400 text-sm flex items-center gap-1 hover:neon-purple transition-all"
                >
                  <ExternalLink className="w-3 h-3" /> Verify
                </a>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-orbitron text-sm text-slate-600">
            © 2026 {profile.name.toUpperCase()} // ALL SYSTEMS OPERATIONAL
          </p>
          <div className="flex justify-center gap-4 mt-6">
            {socials.map((s) => {
              const Icon = iconMap[s.icon]
              return Icon ? (
                <a 
                  key={s.name} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-purple-500/30 rounded hover:border-purple-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
                >
                  <Icon className="w-5 h-5 text-purple-400" />
                </a>
              ) : null
            })}
          </div>
        </div>
      </footer>
    </div>
  )
}
