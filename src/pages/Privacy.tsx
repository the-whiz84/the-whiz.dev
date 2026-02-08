import { motion } from 'motion/react'
import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-rajdhani">
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        
        .neon-cyan { color: #00ffff; text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff; }
        .neon-pink { color: #ff0080; text-shadow: 0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 40px #ff0080; }
        
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

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-orbitron text-xs tracking-widest">BACK</span>
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-orbitron text-5xl md:text-7xl font-black mb-12 neon-cyan"
        >
          PRIVACY
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-10 text-slate-400"
        >
          <section className="bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 shadow-[0_0_30px_rgba(0,255,255,0.1)]">
            <h2 className="font-orbitron text-lg text-cyan-400 mb-4">INTRODUCTION</h2>
            <p className="leading-relaxed">
              Welcome to <strong className="text-cyan-400">the-whiz.dev</strong>. I value your privacy and believe in transparency.
              This policy explains how I handle your data (spoiler: I don't).
            </p>
          </section>

          <section className="bg-slate-900/80 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6 shadow-[0_0_30px_rgba(255,0,128,0.1)]">
            <h2 className="font-orbitron text-lg text-pink-400 mb-4">NO DATA COLLECTION</h2>
            <p className="leading-relaxed">
              This website is a static portfolio designed to showcase my work.
              I do <strong className="text-white">not</strong> collect, store, or process any personal data from visitors.
              There are no forms to fill out, and no accounts to create.
            </p>
          </section>

          <section className="bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            <h2 className="font-orbitron text-lg text-purple-400 mb-4">NO COOKIES</h2>
            <p className="leading-relaxed">
              I do <strong className="text-white">not</strong> use cookies, local storage, or any third-party tracking scripts
              (like Google Analytics or Facebook Pixel). Your browsing activity on this site is completely private
              and stays on your device.
            </p>
          </section>

          <section className="bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 shadow-[0_0_30px_rgba(0,255,255,0.1)]">
            <h2 className="font-orbitron text-lg text-cyan-400 mb-4">EXTERNAL LINKS</h2>
            <p className="leading-relaxed">
              This website contains links to external sites (such as GitHub, LinkedIn, and project demos).
              Please be aware that I am not responsible for the content or privacy practices of these other sites.
              I encourage you to be aware when you leave my site and to read the privacy statements of any
              other site that collects personally identifiable information.
            </p>
          </section>

          <section className="bg-slate-900/80 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6 shadow-[0_0_30px_rgba(255,0,128,0.1)]">
            <h2 className="font-orbitron text-lg text-pink-400 mb-4">CONTACT</h2>
            <p className="leading-relaxed">
              If you have any questions about this (very short) privacy policy, feel free to reach out via email at:{' '}
              <a href="mailto:radu@the-whiz.dev" className="text-cyan-400 hover:underline neon-cyan">
                radu@the-whiz.dev
              </a>
            </p>
          </section>

          <div className="pt-8 border-t border-slate-800 text-sm text-slate-600 font-orbitron">
            Last Updated: February 2026
          </div>
        </motion.div>
      </div>
    </div>
  )
}
