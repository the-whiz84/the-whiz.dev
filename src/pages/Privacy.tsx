import { motion } from 'motion/react'
import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-dark text-white font-outfit overflow-hidden">
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .font-space { font-family: 'Space Mono', monospace; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
        
        .bg-dark { background: linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #0d0d14 100%); }
        .text-emerald { color: #34d399; }
      `}</style>

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors mb-12 font-space"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-widest">BACK</span>
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-outfit text-6xl md:text-8xl font-bold mb-12"
        >
          PRIVACY
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12 text-zinc-400 text-lg"
        >
          <section>
            <h2 className="font-space text-2xl text-white mb-4">INTRODUCTION</h2>
            <p className="leading-relaxed">
              Welcome to <strong className="text-emerald-400">the-whiz.dev</strong>. I value your privacy and believe in transparency.
              This policy explains how I handle your data (spoiler: I don't).
            </p>
          </section>

          <section>
            <h2 className="font-space text-2xl text-white mb-4">NO DATA COLLECTION</h2>
            <p className="leading-relaxed">
              This website is a static portfolio designed to showcase my work.
              I do <strong className="text-white">not</strong> collect, store, or process any personal data from visitors.
              There are no forms to fill out, and no accounts to create.
            </p>
          </section>

          <section>
            <h2 className="font-space text-2xl text-white mb-4">NO COOKIES</h2>
            <p className="leading-relaxed">
              I do <strong className="text-white">not</strong> use cookies, local storage, or any third-party tracking scripts. 
              Your browsing activity on this site is completely private and stays on your device.
            </p>
          </section>

          <section>
            <h2 className="font-space text-2xl text-white mb-4">EXTERNAL LINKS</h2>
            <p className="leading-relaxed">
              This website contains links to external sites (such as GitHub, LinkedIn, and project demos).
              Please be aware that I am not responsible for the content or privacy practices of these other sites.
            </p>
          </section>

          <section>
            <h2 className="font-space text-2xl text-white mb-4">CONTACT</h2>
            <p className="leading-relaxed">
              If you have any questions about this (very short) privacy policy, feel free to reach out via email at:{' '}
              <a href="mailto:radu@the-whiz.dev" className="text-emerald-400 hover:underline">
                radu@the-whiz.dev
              </a>
            </p>
          </section>

          <div className="pt-8 border-t border-zinc-800 text-sm text-zinc-600 font-space">
            Last Updated: February 2026
          </div>
        </motion.div>
      </div>
    </div>
  )
}
