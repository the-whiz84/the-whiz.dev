import { cn } from '../../lib/utils'

export interface ShimmerButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  tone?: 'cyan' | 'pink'
}

/**
 * Local Magic UI-style shimmer button tuned to the site's neon palette.
 */
export function ShimmerButton({
  children,
  tone = 'cyan',
  className,
  ...props
}: ShimmerButtonProps) {
  const isPink = tone === 'pink'

  return (
    <a
      className={cn(
        'group relative inline-flex items-center justify-center overflow-hidden rounded bg-slate-950/88 px-6 py-3 font-orbitron font-bold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        isPink
          ? 'border border-pink-300/85 text-pink-100 shadow-[0_0_0_1px_rgba(244,114,182,0.28),0_0_24px_rgba(236,72,153,0.18),inset_0_0_24px_rgba(131,24,67,0.18)] hover:border-pink-200 hover:text-white hover:shadow-[0_0_0_1px_rgba(249,168,212,0.46),0_0_34px_rgba(236,72,153,0.28),inset_0_0_30px_rgba(34,211,238,0.1)] focus-visible:ring-pink-300'
          : 'border border-cyan-300/85 text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.28),0_0_24px_rgba(34,211,238,0.22),inset_0_0_24px_rgba(8,145,178,0.18)] hover:border-cyan-200 hover:text-white hover:shadow-[0_0_0_1px_rgba(103,232,249,0.48),0_0_34px_rgba(34,211,238,0.34),inset_0_0_30px_rgba(236,72,153,0.12)] focus-visible:ring-cyan-300',
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-y-[-145%] left-[-72%] w-[72%] -skew-x-[22deg] blur-xl mix-blend-screen animate-[shimmer-band_1.95s_linear_infinite] motion-reduce:hidden',
          isPink
            ? 'bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.14)_22%,rgba(255,255,255,0.92)_48%,rgba(249,168,212,0.42)_62%,rgba(103,232,249,0.22)_74%,transparent_100%)]'
            : 'bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.14)_22%,rgba(255,255,255,0.92)_48%,rgba(103,232,249,0.42)_62%,rgba(236,72,153,0.3)_72%,transparent_100%)]',
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-0 opacity-95 transition-opacity duration-300 group-hover:opacity-100',
          isPink
            ? 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_36%),radial-gradient(circle_at_20%_20%,rgba(249,168,212,0.18),transparent_28%),linear-gradient(135deg,rgba(131,24,67,0.2),rgba(15,23,42,0.08)_55%,rgba(34,211,238,0.18))]'
            : 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_36%),radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.2),transparent_28%),linear-gradient(135deg,rgba(8,145,178,0.22),rgba(15,23,42,0.08)_55%,rgba(236,72,153,0.22))]',
        )}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(118deg,transparent_28%,rgba(255,255,255,0.08)_44%,transparent_60%)] opacity-70"
      />
      <span
        className={cn(
          'absolute inset-[1px] rounded-[3px]',
          isPink
            ? 'bg-[linear-gradient(135deg,rgba(3,7,18,0.98),rgba(58,12,39,0.92)_52%,rgba(8,47,73,0.82))]'
            : 'bg-[linear-gradient(135deg,rgba(3,7,18,0.98),rgba(8,47,73,0.9)_48%,rgba(58,12,39,0.92))]',
        )}
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </a>
  )
}
