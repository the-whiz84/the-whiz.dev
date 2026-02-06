import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white font-clash">
      {/* CSS Animations */}
      <style>{`
        .font-monument { font-family: 'Monument Extended', 'Clash Display', sans-serif; }
        .font-clash { font-family: 'Clash Display', sans-serif; }

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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .delay-200 { animation-delay: 0.2s; opacity: 0; }
      `}</style>

      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-orange-500 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-clash text-sm tracking-widest">BACK</span>
        </Link>

        <h1
          className="font-monument text-[12vw] md:text-[8vw] leading-none mb-12 animate-fade-in-up"
          style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.3)',
            WebkitTextFillColor: 'transparent',
          }}
        >
          PRIVACY
        </h1>

        <div className="space-y-10 text-zinc-400 animate-fade-in-up delay-200">
          <section>
            <h2 className="font-monument text-xl text-white mb-4">INTRODUCTION</h2>
            <p className="leading-relaxed">
              Welcome to <strong className="text-orange-500">the-whiz.dev</strong>. I value your privacy and believe in transparency.
              This policy explains how I handle your data (spoiler: I don't).
            </p>
          </section>

          <section>
            <h2 className="font-monument text-xl text-white mb-4">NO DATA COLLECTION</h2>
            <p className="leading-relaxed">
              This website is a static portfolio designed to showcase my work.
              I do <strong className="text-white">not</strong> collect, store, or process any personal data from visitors.
              There are no forms to fill out, and no accounts to create.
            </p>
          </section>

          <section>
            <h2 className="font-monument text-xl text-white mb-4">NO COOKIES</h2>
            <p className="leading-relaxed">
              I do <strong className="text-white">not</strong> use cookies, local storage, or any third-party tracking scripts
              (like Google Analytics or Facebook Pixel). Your browsing activity on this site is completely private
              and stays on your device.
            </p>
          </section>

          <section>
            <h2 className="font-monument text-xl text-white mb-4">EXTERNAL LINKS</h2>
            <p className="leading-relaxed">
              This website contains links to external sites (such as GitHub, LinkedIn, and project demos).
              Please be aware that I am not responsible for the content or privacy practices of these other sites.
              I encourage you to be aware when you leave my site and to read the privacy statements of any
              other site that collects personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="font-monument text-xl text-white mb-4">CONTACT</h2>
            <p className="leading-relaxed">
              If you have any questions about this (very short) privacy policy, feel free to reach out via email at:{' '}
              <a href="mailto:radu@the-whiz.dev" className="text-orange-500 hover:underline">
                radu@the-whiz.dev
              </a>
            </p>
          </section>

          <div className="pt-8 border-t border-zinc-800 text-sm text-zinc-600">
            Last Updated: January 2026
          </div>
        </div>
      </div>
    </div>
  )
}
