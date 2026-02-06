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

// CSS animation utilities
const fadeInUp = "animate-fade-in-up"
const fadeIn = "animate-fade-in"
const slideInLeft = "animate-slide-in-left"
const slideInRight = "animate-slide-in-right"

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
      {/* CSS Keyframes & Font Definitions */}
      <style>{`
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

        /* CSS Animation Keyframes */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }

        @keyframes mobile-menu-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 1.5s ease-in-out infinite;
        }

        .animate-mobile-menu {
          animation: mobile-menu-in 0.2s ease-out forwards;
        }

        /* Stagger animation delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        /* Initially hide animated elements */
        .animate-on-load {
          opacity: 0;
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
            onClick={() => containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/assets/img/navbar-logo-symbol.webp" 
              alt="The Whiz" 
              className="h-16 w-auto hover:opacity-80 transition-opacity" 
            />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`font-clash text-sm tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'text-orange-500'
                        : 'text-zinc-400 hover:text-orange-500'
                    }`}
                  >
                    {item.label.toUpperCase()}
                  </button>
                </li>
              )
            })}
            {/* V3 Link */}
            <li>
              <a
                href="https://v3.the-whiz.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-clash text-sm tracking-wider text-orange-500 hover:text-orange-400 transition-all duration-300 flex items-center gap-1"
              >
                V3 <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
          </ul>

          {/* Social Icons */}
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
            className="md:hidden text-white p-2 relative z-50"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay - CSS animated */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 pt-20 animate-mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="font-clash text-2xl font-bold text-white hover:text-orange-500 transition-colors uppercase tracking-widest"
              >
                {item.label}
              </button>
            ))}
            <div className="h-px w-24 bg-white/10" />
            <a
              href="https://v3.the-whiz.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-clash text-lg text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-2 font-bold tracking-wider"
            >
              V3 WEBSITE <ArrowUpRight className="w-5 h-5" />
            </a>
            
            <div className="flex gap-6 mt-4">
              {socials.map((s) => {
                const Icon = iconMap[s.icon]
                return Icon ? (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-orange-500/50 hover:text-orange-500 transition-all"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ) : null
              })}
            </div>
          </div>
        )}

      </nav>

      {/* Hero — Full Viewport Typography */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className={`text-center animate-on-load ${fadeInUp}`}>
            <h1 className="font-monument text-[10vw] md:text-[12vw] leading-[0.85] tracking-tighter">
              <span className="block text-stroke">RADU</span>
              <span className="block text-orange-500">CHIRIAC</span>
            </h1>
            <p className={`font-clash text-zinc-400 text-lg md:text-2xl mt-6 tracking-wide animate-on-load ${fadeIn} delay-300`}>
              HPC ENGINEER AT <a href="https://www.bull.com" target="_blank" rel="noreferrer" className="text-orange-500 hover:text-white transition-colors">BULL</a> AND HOBBYST DEVELOPER
            </p>
            <a
              href={profile.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-zinc-500 font-clash text-sm mt-2 hover:text-orange-500 transition-colors animate-on-load ${fadeIn} delay-600`}
            >
              {profile.location.toUpperCase()}
            </a>
          </div>

        <p className={`absolute bottom-24 text-zinc-500 font-clash text-lg tracking-wider animate-on-load ${fadeIn} delay-500`}>
          SCROLL TO EXPLORE
        </p>

        <div className="absolute bottom-12 animate-bounce-gentle">
          <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent" />
        </div>
      </section>

      {/* Projects Section — Right After Hero */}
      <section id="projects" className="py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className={`font-monument text-[10vw] md:text-[8vw] text-stroke mb-12 ${slideInLeft}`}>
            PROJECTS
          </h2>

          {/* Project Cards with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all duration-500 ${fadeInUp}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className={`font-monument text-[10vw] md:text-[8vw] text-stroke-orange mb-12 ${slideInLeft}`}>
            EXPERIENCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {experience.map((exp, i) => (
              <div
                key={i}
                className={`border-l-4 border-zinc-800 hover:border-orange-500 pl-6 transition-all duration-500 text-left ${i % 2 === 0 ? slideInLeft : slideInRight}`}
                style={{ animationDelay: `${i * 100}ms` }}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className={`font-monument text-[10vw] md:text-[8vw] text-stroke mb-12 ${slideInLeft}`}>
            SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className={`group p-6 border border-zinc-800 hover:border-orange-500 transition-all duration-500 ${fadeInUp}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="font-monument text-xl mb-3 group-hover:text-orange-500 transition-colors">
                  {skill.name.toUpperCase()}
                </h3>
                <p className="font-clash text-zinc-500 group-hover:text-zinc-300 transition-colors text-base">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className={`font-monument text-[10vw] md:text-[8vw] text-stroke-orange mb-12 ${slideInLeft}`}>
            CERTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 border border-zinc-800 hover:border-orange-500 transition-all duration-500 flex flex-col items-center text-center ${fadeInUp}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 object-contain mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-monument text-base mb-2 group-hover:text-orange-500 transition-colors">
                  {cert.title.toUpperCase()}
                </h3>
                <p className="font-clash text-zinc-500 text-base">{cert.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-10 px-8 border-t border-zinc-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
            <div className="text-left">
              <h2 className={`font-monument text-3xl md:text-4xl text-orange-500 mb-4 ${fadeInUp}`}>
                LET'S CONNECT
              </h2>
              <p className="font-clash text-zinc-400 text-base max-w-md">
                {profile.tagline}
              </p>
            </div>
            
            <div className={`flex flex-wrap gap-4 md:justify-end ${fadeIn}`}>
              <a
                href={profile.resumeUrl}
                className="font-clash text-sm px-8 py-4 border border-zinc-800 bg-zinc-900/50 text-white hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-300 flex items-center gap-3"
              >
                <Download className="w-4 h-4" /> DOWNLOAD CV
              </a>
              <a
                href="mailto:radu@the-whiz.dev"
                className="font-clash text-sm px-8 py-4 bg-white text-black hover:bg-orange-500 transition-all duration-300 flex items-center gap-3"
              >
                <Mail className="w-4 h-4" /> SEND EMAIL
              </a>
            </div>
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
