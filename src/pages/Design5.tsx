import { motion } from 'motion/react'
import { Link } from 'react-router'
import { profile, projects, skills, experience, socials, certifications } from '../data'
import { Github, Linkedin, Twitter, Star, Sparkles, Zap, ArrowRight, ExternalLink } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github, Linkedin, Twitter
}

function Sticker({ 
  children, 
  color = 'yellow',
  rotate = 0,
  className = ''
}: { 
  children: React.ReactNode
  color?: 'yellow' | 'pink' | 'blue' | 'green' | 'white'
  rotate?: number
  className?: string
}) {
  const colors = {
    yellow: 'bg-yellow-400 text-black',
    pink: 'bg-pink-500 text-white',
    blue: 'bg-blue-600 text-white',
    green: 'bg-emerald-400 text-black',
    white: 'bg-white text-black border-4 border-black',
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: rotate - 20 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, rotate: rotate + 5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`${colors[color]} ${className} px-6 py-4 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-bold inline-block`}
    >
      {children}
    </motion.div>
  )
}

function Stamp({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
      viewport={{ once: true }}
      className={`inline-block border-4 border-red-600 text-red-600 px-4 py-2 rounded-sm uppercase tracking-widest font-black text-sm ${className}`}
      style={{ 
        boxShadow: 'inset 0 0 0 2px currentColor',
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Design5() {
  return (
    <div className="min-h-screen bg-yellow-300 text-black overflow-x-hidden">
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Permanent+Marker&family=Bangers&display=swap');
        
        .font-anton { font-family: 'Anton', sans-serif; }
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .font-marker { font-family: 'Permanent Marker', cursive; }
        .font-bangers { font-family: 'Bangers', cursive; }
        
        .paper-texture {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
        }
        
        .tape {
          position: absolute;
          width: 80px;
          height: 30px;
          background: rgba(255,255,200,0.8);
          transform: rotate(-3deg);
        }
        
        .zigzag {
          background: linear-gradient(135deg, #000 25%, transparent 25%) -20px 0,
                      linear-gradient(225deg, #000 25%, transparent 25%) -20px 0,
                      linear-gradient(315deg, #000 25%, transparent 25%),
                      linear-gradient(45deg, #000 25%, transparent 25%);
          background-size: 40px 40px;
        }
      `}</style>

      {/* Paper Texture Overlay */}
      <div className="fixed inset-0 paper-texture pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bebas text-xl bg-black text-yellow-300 px-4 py-2 hover:bg-pink-500 hover:text-white transition-colors">
            ← BACK
          </Link>
          <div className="flex gap-2">
            {socials.map((s) => {
              const Icon = iconMap[s.icon]
              return Icon ? (
                <motion.a 
                  key={s.name} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="p-2 bg-black text-yellow-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ) : null
            })}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20 relative">
        {/* Scattered decorations */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="absolute top-32 right-20"
        >
          <Star className="w-16 h-16 text-pink-500 fill-pink-500" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-32 left-20"
        >
          <Sparkles className="w-12 h-12 text-blue-600" />
        </motion.div>

        <div className="text-center relative">
          <Stamp className="mb-8">Available for Hire</Stamp>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-anton text-8xl md:text-[12rem] leading-none tracking-tight"
          >
            <span className="block text-black">RADU</span>
            <span className="block text-pink-500" style={{ WebkitTextStroke: '4px black' }}>
              CHIRIAC
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="mt-8 inline-block"
          >
            <Sticker color="blue" rotate={-3}>
              <span className="font-marker text-xl">{profile.tagline.slice(0, 50)}...</span>
            </Sticker>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <motion.a 
              href={profile.resumeUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-bebas text-2xl bg-black text-yellow-300 px-8 py-4 shadow-[6px_6px_0_0_rgba(219,39,119,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              GRAB MY RESUME <Zap className="inline w-6 h-6" />
            </motion.a>
            <motion.a 
              href={profile.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="font-bebas text-2xl bg-pink-500 text-white px-8 py-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              📍 {profile.location.toUpperCase()}
            </motion.a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-8 zigzag" />
        <div className="absolute bottom-0 left-0 right-0 h-8 zigzag transform rotate-180" />
        
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-anton text-7xl text-white mb-12 text-center"
        >
          WHAT I DO 🔥
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <Sticker 
              key={skill.name} 
              color={['yellow', 'pink', 'green', 'white'][i % 4] as 'yellow' | 'pink' | 'green' | 'white'}
              rotate={(i % 2 === 0 ? 1 : -1) * (Math.random() * 6 + 2)}
            >
              <span className="font-bebas text-xl">{skill.name.toUpperCase()}</span>
            </Sticker>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-8 bg-pink-500">
        <motion.h2 
          initial={{ opacity: 0, rotate: -3 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="font-bangers text-7xl text-white mb-12 text-center"
          style={{ textShadow: '4px 4px 0 #000' }}
        >
          MY JOURNEY!! ⚡
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experience.slice(0, 4).map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
              style={{ transform: `rotate(${(i % 2 === 0 ? 1 : -1) * 1}deg)` }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <h3 className="font-anton text-2xl">{exp.role.toUpperCase()}</h3>
                  <p className="font-marker text-pink-500">{exp.company}</p>
                </div>
                <Sticker color="yellow" rotate={3} className="text-sm">
                  {exp.period}
                </Sticker>
              </div>
              <ul className="mt-4 space-y-1">
                {exp.accomplishments.slice(0, 2).map((acc, j) => (
                  <li key={j} className="font-bebas text-lg flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" /> {acc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8 bg-emerald-400">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-anton text-7xl text-black mb-12 text-center"
        >
          COOL STUFF I MADE 🚀
        </motion.h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, rotate: (i % 2 === 0 ? 2 : -2) }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: 0 }}
              className="block bg-white p-6 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bangers text-3xl text-pink-500">{project.title}</h3>
                <ExternalLink className="w-6 h-6" />
              </div>
              <p className="font-bebas text-lg text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-bebas text-sm bg-black text-yellow-300 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-8 bg-white">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-anton text-6xl text-center mb-12"
        >
          BADGES & CERTS 🏆
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-yellow-300 p-6 border-4 border-black text-center w-64"
              style={{ transform: `rotate(${(i - 1) * 3}deg)` }}
            >
              <h3 className="font-marker text-lg mb-2">{cert.title}</h3>
              <p className="font-bebas text-sm text-gray-700">{cert.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-black text-yellow-300 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-bangers text-5xl mb-8"
          style={{ textShadow: '3px 3px 0 #db2777' }}
        >
          LET'S BE FRIENDS!! 🤝
        </motion.h2>
        
        <div className="flex justify-center gap-4 mb-8">
          {socials.map((s) => {
            const Icon = iconMap[s.icon]
            return Icon ? (
              <motion.a 
                key={s.name} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.3, rotate: 15 }}
                className="p-4 bg-yellow-300 text-black"
              >
                <Icon className="w-8 h-8" />
              </motion.a>
            ) : null
          })}
        </div>
        
        <p className="font-bebas text-2xl">
          © 2026 RADU CHIRIAC • MADE WITH 💛 AND CHAOS
        </p>
      </footer>
    </div>
  )
}
