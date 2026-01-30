import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center py-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-background" />

      {/* Floating Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10" style={{ marginTop: "6rem" }}>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          style={{ marginBottom: "3rem", display: "inline-flex" }}
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ marginBottom: "3rem" }}>
          <span className="gradient-text text-glow">Privacy Policy</span>
        </h1>

        <div className="text-lg text-muted-foreground leading-relaxed glass p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
          <section style={{ marginBottom: "3rem" }}>
            <h2 className="text-2xl font-semibold text-foreground" style={{ marginBottom: "1rem" }}>Introduction</h2>
            <p>
              Welcome to <strong>the-whiz.dev</strong>. I value your privacy and believe in transparency. 
              This policy explains how I handle your data (spoiler: I don&apos;t).
            </p>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2 className="text-2xl font-semibold text-foreground" style={{ marginBottom: "1rem" }}>No Data Collection</h2>
            <p>
              This website is a static portfolio designed to showcase my work. 
              I do <strong>not</strong> collect, store, or process any personal data from visitors.
              There are no forms to fill out, and no accounts to create.
            </p>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2 className="text-2xl font-semibold text-foreground" style={{ marginBottom: "1rem" }}>No Cookies</h2>
            <p>
              I do <strong>not</strong> use cookies, local storage, or any third-party tracking scripts 
              (like Google Analytics or Facebook Pixel). Your browsing activity on this site is completely private 
              and stays on your device.
            </p>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2 className="text-2xl font-semibold text-foreground" style={{ marginBottom: "1rem" }}>External Links</h2>
            <p>
              This website contains links to external sites (such as GitHub, LinkedIn, and project demos). 
              Please be aware that I am not responsible for the content or privacy practices of these other sites. 
              I encourage you to be aware when you leave my site and to read the privacy statements of any 
              other site that collects personally identifiable information.
            </p>
          </section>

          <section style={{ marginBottom: "2rem" }}>
            <h2 className="text-2xl font-semibold text-foreground" style={{ marginBottom: "1rem" }}>Contact</h2>
            <p>
              If you have any questions about this (very short) privacy policy, feel free to reach out via email at:{' '}
              <a href="mailto:radu@the-whiz.dev" className="text-primary hover:underline">
                radu@the-whiz.dev
              </a>
            </p>
          </section>

          <div className="pt-8 border-t border-white/10 text-sm text-muted-foreground/60">
            Last Updated: January 2026
          </div>
        </div>
      </div>
    </div>
  );
}
