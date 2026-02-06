import { motion } from 'motion/react'
import { Link } from 'react-router'
import { profile, projects, skills, experience, socials, certifications } from '../data'
import { Github, Linkedin, Twitter, MapPin, FileDown, ExternalLink } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github, Linkedin, Twitter
}

function IsometricBlock({ 
  children, 
  color = 'bg-emerald-500/20', 
  delay = 0,
  className = ''
}: { 
  children?: React.ReactNode
  color?: string
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`${color} ${className} rounded-2xl p-6 backdrop-blur-xl border border-white/10 transform-gpu`}
      style={{ 
        transformStyle: 'preserve-3d',
        boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-dark text-white overflow-x-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .font-space { font-family: 'Space Mono', monospace; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
        
        .bg-dark { background: linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #0d0d14 100%); }
        .bg-emerald { background: rgba(16, 185, 129, 0.15); }
        .bg-amber { background: rgba(245, 158, 11, 0.15); }
        .bg-cyan { background: rgba(6, 182, 212, 0.15); }
        .bg-rose { background: rgba(244, 63, 94, 0.15); }
        .bg-glass { background: rgba(255, 255, 255, 0.05); }
        
        .text-emerald { color: #34d399; }
        .text-amber { color: #fbbf24; }
        .text-cyan { color: #22d3ee; }
        .text-rose { color: #fb7185; }
        
        .grid-iso {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .glow-emerald { box-shadow: 0 0 40px rgba(16, 185, 129, 0.3); }
        .glow-amber { box-shadow: 0 0 40px rgba(245, 158, 11, 0.3); }
      `}</style>

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Section Links */}
          <div className="flex gap-6 items-center">
            <a href="#projects" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors font-space">Projects</a>
            <a href="#skills" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors font-space">Skills</a>
            <a href="#experience" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors font-space">Experience</a>
            <a href="#certifications" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors font-space">Certifications</a>
            <a 
              href="https://v3.the-whiz.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-space flex items-center gap-1"
            >
              V3 <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex gap-3">
            {socials.map((s) => {
              const Icon = iconMap[s.icon]
              return Icon ? (
                <a 
                  key={s.name} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                >
                  <Icon className="w-4 h-4 text-zinc-400" />
                </a>
              ) : null
            })}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-8 relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-outfit text-6xl md:text-8xl font-bold leading-tight">
              <span className="text-zinc-300">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {profile.name.split(' ')[0]}
              </span>
            </h1>
            <p className="font-outfit text-xl text-zinc-400 mt-6 leading-relaxed">
              {profile.tagline}
            </p>
            <div className="flex gap-4 mt-8">
              <a 
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-outfit flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
              >
                <FileDown className="w-4 h-4" /> Resume
              </a>
              <a 
                href={profile.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-outfit flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur border border-white/10 text-zinc-300 rounded-full hover:border-emerald-500/50 transition-all"
              >
                <MapPin className="w-4 h-4" /> {profile.location}
              </a>
            </div>
          </motion.div>

          {/* Right: Isometric Stack */}
          <div className="relative h-96" style={{ transformStyle: 'preserve-3d' }}>
            <IsometricBlock 
              color="bg-emerald" 
              delay={0.1}
              className="absolute top-0 right-0 w-48 h-48 glow-emerald"
            >
              <span className="font-space text-5xl">👨‍💻</span>
            </IsometricBlock>
            <IsometricBlock 
              color="bg-emerald" 
              delay={0.2}
              className="absolute top-20 right-32 w-40 h-40 glow-emerald"
            >
              <span className="font-space text-4xl">🐧</span>
            </IsometricBlock>
            <IsometricBlock 
              color="bg-amber" 
              delay={0.3}
              className="absolute top-40 right-8 w-36 h-36 glow-amber"
            >
              <span className="font-space text-3xl">☁️</span>
            </IsometricBlock>
            <IsometricBlock 
              color="bg-cyan" 
              delay={0.4}
              className="absolute top-56 right-40 w-32 h-32"
            >
              <span className="font-space text-2xl">🔐</span>
            </IsometricBlock>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            className="font-outfit text-5xl font-bold text-center mb-16"
          >
            My <span className="text-emerald-400">Projects</span>
          </motion.h2>
          <div className="grid-iso">
            {projects.map((project, i) => (
              <IsometricBlock 
                key={project.title} 
                color={['bg-teal', 'bg-emerald', 'bg-amber', 'bg-cyan', 'bg-rose'][i % 5]}
                delay={i * 0.1}
              >
                {/* Project Image */}
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-black/20">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="font-space text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="font-outfit text-base text-zinc-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-space text-xs bg-white/10 px-2 py-1 rounded-full text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-outfit text-sm flex items-center gap-1 text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" /> {project.linkLabel}
                </a>
              </IsometricBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl font-bold text-center mb-16"
          >
            My <span className="text-emerald">Skills</span>
          </motion.h2>
          <div className="grid-iso">
            {skills.map((skill, i) => (
              <IsometricBlock 
                key={skill.name} 
                color={['bg-emerald', 'bg-teal', 'bg-amber', 'bg-cyan', 'bg-rose'][i % 5]}
                delay={i * 0.1}
              >
                <h3 className="font-space text-lg font-bold mb-2 text-white">{skill.name}</h3>
                <p className="font-outfit text-sm text-zinc-400">{skill.description}</p>
              </IsometricBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            className="font-outfit text-5xl font-bold text-center mb-16"
          >
            My <span className="text-amber">Journey</span>
          </motion.h2>
          <div className="space-y-6">
            {experience.slice(0, 4).map((exp, i) => (
              <IsometricBlock 
                key={i} 
                color="bg-glass"
                delay={i * 0.1}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-outfit text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="font-space text-base text-emerald-400">{exp.company}</p>
                  </div>
                  <span className="font-space text-xs text-zinc-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-1">
                  {exp.accomplishments.slice(0, 2).map((acc, j) => (
                    <li key={j} className="font-outfit text-base text-zinc-400">• {acc}</li>
                  ))}
                </ul>
              </IsometricBlock>
            ))}
          </div>
        </div>
      </section>



      {/* Certifications Section */}
      <section className="py-24 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            className="font-outfit text-5xl font-bold text-center mb-16"
          >
            <span className="text-emerald">Certifications</span>
          </motion.h2>
          <div className="grid-iso">
            {certifications.map((cert, i) => (
              <IsometricBlock 
                key={cert.title} 
                color="bg-glass"
                delay={i * 0.1}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img src={cert.image} alt={cert.title} className="w-16 h-16 object-contain rounded-lg bg-white/5 p-2" />
                  <div>
                    <h3 className="font-space text-base font-bold text-white">{cert.title}</h3>
                    <p className="font-outfit text-sm text-zinc-500 mt-1">{cert.description}</p>
                  </div>
                </div>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-outfit text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" /> View Certificate
                </a>
              </IsometricBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 text-center border-t border-white/5">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-outfit text-zinc-500"
        >
          Built with 💜 by {profile.name} • 2026
        </motion.p>
        <Link to="/privacy" className="block mt-4 text-sm text-zinc-600 hover:text-emerald-400 transition-colors font-space">
          Privacy Policy
        </Link>
        <div className="flex justify-center gap-4 mt-6">
          {socials.map((s) => {
            const Icon = iconMap[s.icon]
            return Icon ? (
              <a 
                key={s.name} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all"
              >
                <Icon className="w-5 h-5 text-emerald-400" />
              </a>
            ) : null
          })}
        </div>
      </footer>
    </div>
  )
}
