import { motion } from 'motion/react'
import { Link } from 'react-router'
import { profile, projects, skills, experience, socials, certifications } from '../data'
import { Github, Linkedin, Twitter, ArrowUpRight, MapPin, Download } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github, Linkedin, Twitter
}

function BlobShape({ className = '', color = 'sage' }: { className?: string; color?: string }) {
  const colors: Record<string, string> = {
    sage: '#c8d9c4',
    cream: '#f5f0e8',
    terracotta: '#e6b8a2',
    sand: '#e8dcc8',
  }
  
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={`absolute opacity-40 ${className}`}
      style={{ filter: 'blur(40px)' }}
    >
      <path
        fill={colors[color]}
        d="M44.7,-76.4C58.9,-69.2,71.8,-58.7,79.3,-45.1C86.8,-31.5,88.9,-15.8,87.3,-0.9C85.8,13.9,80.5,27.8,72.4,40.1C64.3,52.3,53.4,62.9,40.6,70.5C27.8,78.1,13.9,82.6,-0.4,83.3C-14.7,84,-29.5,80.8,-42.8,73.8C-56.1,66.8,-68,56,-75.4,42.7C-82.8,29.4,-85.7,14.7,-85.6,0.1C-85.4,-14.6,-82.2,-29.1,-74.8,-41.6C-67.4,-54,-55.8,-64.4,-42.5,-72C-29.2,-79.6,-14.6,-84.4,0.5,-85.3C15.6,-86.1,30.5,-83.6,44.7,-76.4Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}

export default function Design4() {
  return (
    <div className="min-h-screen bg-cream text-stone-800 overflow-x-hidden relative">
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
        
        .font-dm { font-family: 'DM Sans', sans-serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        
        .bg-cream { background-color: #faf8f4; }
        .bg-sage { background-color: #c8d9c4; }
        .bg-terracotta { background-color: #e6b8a2; }
        .bg-sand { background-color: #e8dcc8; }
        
        .text-sage { color: #6b8068; }
        .text-terracotta { color: #c4795c; }
        
        .organic-card {
          border-radius: 2rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(248,245,240,0.6) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(200,217,196,0.3);
        }
      `}</style>

      {/* Floating Blobs */}
      <BlobShape className="top-20 -left-40 w-96 h-96" color="sage" />
      <BlobShape className="top-1/3 -right-20 w-80 h-80" color="terracotta" />
      <BlobShape className="bottom-20 left-1/4 w-72 h-72" color="sand" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-dm text-sm text-stone-500 hover:text-sage transition-colors">
            ← Back
          </Link>
          <div className="flex gap-3">
            {socials.map((s) => {
              const Icon = iconMap[s.icon]
              return Icon ? (
                <a 
                  key={s.name} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/60 backdrop-blur rounded-full hover:bg-sage/20 transition-all"
                >
                  <Icon className="w-4 h-4 text-stone-600" />
                </a>
              ) : null
            })}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-dm text-sage text-sm tracking-widest uppercase mb-6">Hello, I'm</p>
            <h1 className="font-cormorant text-7xl md:text-8xl font-light text-stone-800 leading-tight">
              {profile.name}
            </h1>
            <p className="font-dm text-lg text-stone-500 mt-8 max-w-xl mx-auto leading-relaxed">
              {profile.tagline}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
          >
            <a 
              href={profile.resumeUrl}
              className="font-dm inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage text-white rounded-full hover:shadow-lg transition-all"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a 
              href={profile.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur text-stone-600 rounded-full hover:shadow-lg transition-all"
            >
              <MapPin className="w-4 h-4" /> {profile.location}
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="organic-card p-12"
          >
            <h2 className="font-cormorant text-4xl text-stone-700 mb-6">About Me</h2>
            <p className="font-dm text-lg text-stone-500 leading-relaxed">
              I believe in the power of simplicity and thoughtful design. With a passion for technology and a love for problem-solving, 
              I create solutions that feel natural and intuitive. My journey spans HPC, DevOps, and Web Development, 
              always striving for elegance in everything I build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-cormorant text-5xl text-center text-stone-700 mb-16"
          >
            Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="organic-card p-8 hover:shadow-xl transition-all duration-500"
              >
                <h3 className="font-cormorant text-2xl text-stone-700 mb-3">{skill.name}</h3>
                <p className="font-dm text-stone-500">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-8 relative">
        <BlobShape className="-right-40 top-1/2 w-96 h-96" color="sage" />
        <div className="max-w-4xl mx-auto relative">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-cormorant text-5xl text-center text-stone-700 mb-16"
          >
            Journey
          </motion.h2>
          <div className="space-y-8">
            {experience.slice(0, 4).map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="organic-card p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-cormorant text-2xl text-stone-700">{exp.role}</h3>
                    <p className="font-dm text-sage">{exp.company}</p>
                  </div>
                  <span className="font-dm text-sm text-stone-400 bg-sand/50 px-4 py-2 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.accomplishments.slice(0, 2).map((acc, j) => (
                    <li key={j} className="font-dm text-stone-500 text-sm">• {acc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-cormorant text-5xl text-center text-stone-700 mb-16"
          >
            Selected Work
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                className="group organic-card p-8 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-cormorant text-2xl text-stone-700 group-hover:text-sage transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-sage group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="font-dm text-stone-500 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-dm text-xs bg-sage/10 text-sage px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-cormorant text-5xl text-center text-stone-700 mb-16"
          >
            Credentials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="organic-card p-6 text-center hover:shadow-lg transition-all group"
              >
                <h3 className="font-cormorant text-lg text-stone-700 mb-2 group-hover:text-sage transition-colors">
                  {cert.title}
                </h3>
                <p className="font-dm text-xs text-stone-400">{cert.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-cormorant text-3xl text-stone-600 mb-8"
        >
          Let's create something beautiful together
        </motion.p>
        <div className="flex justify-center gap-4">
          {socials.map((s) => {
            const Icon = iconMap[s.icon]
            return Icon ? (
              <a 
                key={s.name} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-sage/10 rounded-full hover:bg-sage/20 transition-all"
              >
                <Icon className="w-5 h-5 text-sage" />
              </a>
            ) : null
          })}
        </div>
        <p className="font-dm text-sm text-stone-400 mt-12">
          © 2026 {profile.name}
        </p>
      </footer>
    </div>
  )
}
