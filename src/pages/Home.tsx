import { Link } from 'react-router'

const designs = [
  { path: '/1', name: 'Kinetic Typography', desc: 'Words ARE the interface — massive moving text' },
  { path: '/2', name: '3D Isometric World', desc: 'Dark floating blocks, explorable diorama' },
  { path: '/3', name: 'Retro-Futuristic Neon', desc: 'Cyberpunk, neon glows, synthwave vibes' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
        Portfolio Designs
      </h1>
      <p className="text-zinc-400 mb-12 text-lg">Choose a design to explore</p>
      
      <div className="grid gap-6 w-full max-w-2xl">
        {designs.map((d) => (
          <Link
            key={d.path}
            to={d.path}
            className="group block p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-purple-500/50 hover:bg-zinc-800/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                  {d.name}
                </h2>
                <p className="text-zinc-500 mt-1">{d.desc}</p>
              </div>
              <span className="text-3xl font-bold text-zinc-700 group-hover:text-purple-500 transition-colors">
                {d.path}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
