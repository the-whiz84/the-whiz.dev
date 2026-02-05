import { motion } from 'motion/react'
import { Link } from 'react-router'
import { profile, projects, skills, experience, socials, certifications } from '../data'
import { Github, Linkedin, Twitter, MapPin, FileDown, ExternalLink } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github, Linkedin, Twitter
}

function IsometricBlock({ 
  children, 
  color = 'bg-lavender', 
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
      className={`${color} ${className} rounded-2xl p-6 shadow-xl transform-gpu`}
      style={{ 
        transformStyle: 'preserve-3d',
        boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.15)'
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Design2() {
  return (
    <div 
      className="min-h-screen bg-cream text-slate-800 overflow-x-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .font-space { font-family: 'Space Mono', monospace; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
        
        .bg-cream { background-color: #faf8f5; }
        .bg-lavender { background-color: #e8e0f0; }
        .bg-mint { background-color: #d4f0e8; }
        .bg-peach { background-color: #fce4d8; }
        .bg-sky { background-color: #dbeafe; }
        .bg-rose { background-color: #fce7f3; }
        
        .text-lavender { color: #8b5cf6; }
        .text-mint { color: #10b981; }
        .text-peach { color: #f97316; }
        
        .grid-iso {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-space text-sm text-slate-500 hover:text-lavender transition-colors">
            ← BACK
          </Link>
          <div className="flex gap-4">
            {socials.map((s) => {
              const Icon = iconMap[s.icon]
              return Icon ? (
                <a 
                  key={s.name} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/80 backdrop-blur rounded-full shadow-sm hover:shadow-md hover:bg-lavender/20 transition-all"
                >
                  <Icon className="w-4 h-4 text-slate-600" />
                </a>
              ) : null
            })}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-outfit text-6xl md:text-7xl font-bold leading-tight">
              <span className="text-slate-800">Hello, I'm</span>
              <br />
              <span className="text-lavender">{profile.name.split(' ')[0]}</span>
            </h1>
            <p className="font-outfit text-xl text-slate-500 mt-6 leading-relaxed">
              {profile.tagline}
            </p>
            <div className="flex gap-4 mt-8">
              <a 
                href={profile.resumeUrl}
                className="font-outfit flex items-center gap-2 px-6 py-3 bg-lavender text-slate-800 rounded-full hover:shadow-lg transition-all"
              >
                <FileDown className="w-4 h-4" /> Resume
              </a>
              <a 
                href={profile.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-outfit flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-full hover:shadow-lg transition-all"
              >
                <MapPin className="w-4 h-4" /> {profile.location}
              </a>
            </div>
          </motion.div>

          {/* Right: Isometric Stack */}
          <div className="relative h-96" style={{ transformStyle: 'preserve-3d' }}>
            <IsometricBlock 
              color="bg-lavender" 
              delay={0.1}
              className="absolute top-0 right-0 w-48 h-48"
            >
              <span className="font-space text-5xl">👨‍💻</span>
            </IsometricBlock>
            <IsometricBlock 
              color="bg-mint" 
              delay={0.2}
              className="absolute top-20 right-32 w-40 h-40"
            >
              <span className="font-space text-4xl">🐧</span>
            </IsometricBlock>
            <IsometricBlock 
              color="bg-peach" 
              delay={0.3}
              className="absolute top-40 right-8 w-36 h-36"
            >
              <span className="font-space text-3xl">☁️</span>
            </IsometricBlock>
            <IsometricBlock 
              color="bg-sky" 
              delay={0.4}
              className="absolute top-56 right-40 w-32 h-32"
            >
              <span className="font-space text-2xl">🔐</span>
            </IsometricBlock>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl font-bold text-center mb-16"
          >
            My <span className="text-mint">Skills</span>
          </motion.h2>
          <div className="grid-iso">
            {skills.map((skill, i) => (
              <IsometricBlock 
                key={skill.name} 
                color={['bg-lavender', 'bg-mint', 'bg-peach', 'bg-sky', 'bg-rose'][i % 5]}
                delay={i * 0.1}
              >
                <h3 className="font-space text-lg font-bold mb-2">{skill.name}</h3>
                <p className="font-outfit text-sm text-slate-600">{skill.description}</p>
              </IsometricBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl font-bold text-center mb-16"
          >
            My <span className="text-peach">Journey</span>
          </motion.h2>
          <div className="space-y-6">
            {experience.slice(0, 4).map((exp, i) => (
              <IsometricBlock 
                key={i} 
                color="bg-white"
                delay={i * 0.1}
                className="border border-slate-100"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-outfit text-xl font-bold">{exp.role}</h3>
                    <p className="font-space text-sm text-lavender">{exp.company}</p>
                  </div>
                  <span className="font-space text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-1">
                  {exp.accomplishments.slice(0, 2).map((acc, j) => (
                    <li key={j} className="font-outfit text-sm text-slate-500">• {acc}</li>
                  ))}
                </ul>
              </IsometricBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl font-bold text-center mb-16"
          >
            My <span className="text-lavender">Projects</span>
          </motion.h2>
          <div className="grid-iso">
            {projects.map((project, i) => (
              <IsometricBlock 
                key={project.title} 
                color={['bg-lavender', 'bg-mint', 'bg-peach', 'bg-sky', 'bg-rose'][i % 5]}
                delay={i * 0.1}
              >
                <h3 className="font-space text-lg font-bold mb-2">{project.title}</h3>
                <p className="font-outfit text-sm text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-space text-xs bg-white/50 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-outfit text-sm flex items-center gap-1 text-slate-700 hover:text-lavender transition-colors"
                >
                  <ExternalLink className="w-3 h-3" /> {project.linkLabel}
                </a>
              </IsometricBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl font-bold text-center mb-16"
          >
            <span className="text-mint">Certifications</span>
          </motion.h2>
          <div className="grid-iso">
            {certifications.map((cert, i) => (
              <IsometricBlock 
                key={cert.title} 
                color="bg-white"
                delay={i * 0.1}
                className="border border-slate-100"
              >
                <h3 className="font-space text-base font-bold mb-2">{cert.title}</h3>
                <p className="font-outfit text-sm text-slate-500 mb-4">{cert.description}</p>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-outfit text-sm text-lavender hover:underline flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" /> View Certificate
                </a>
              </IsometricBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-outfit text-slate-400"
        >
          Built with 💜 by {profile.name} • 2026
        </motion.p>
        <div className="flex justify-center gap-4 mt-6">
          {socials.map((s) => {
            const Icon = iconMap[s.icon]
            return Icon ? (
              <a 
                key={s.name} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-lavender/20 rounded-full hover:bg-lavender/40 transition-all"
              >
                <Icon className="w-5 h-5 text-lavender" />
              </a>
            ) : null
          })}
        </div>
      </footer>
    </div>
  )
}
