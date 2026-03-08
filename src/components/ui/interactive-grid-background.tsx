import { motion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '../../lib/utils'

interface ContainerSize {
  width: number
  height: number
}

const DEFAULT_SIZE: ContainerSize = {
  width: 0,
  height: 0,
}

interface WireLine {
  id: string
  d: string
}

const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor

/**
 * Props for the hero-scoped ambient wireframe background.
 */
export interface InteractiveGridBackgroundProps {
  /** Optional className for layout overrides in parent sections. */
  className?: string
}

/**
 * Renders a perspective wireframe horizon with restrained motion and cursor glow.
 */
export function InteractiveGridBackground({
  className,
}: InteractiveGridBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [containerSize, setContainerSize] = useState(DEFAULT_SIZE)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const containerElement = containerRef.current
    if (!containerElement) return

    const syncContainerSize = () => {
      const bounds = containerElement.getBoundingClientRect()
      setContainerSize({
        width: bounds.width,
        height: bounds.height,
      })
    }

    syncContainerSize()

    let resizeObserver: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncContainerSize)
      resizeObserver.observe(containerElement)
    }

    window.addEventListener('resize', syncContainerSize, { passive: true })
    return () => {
      window.removeEventListener('resize', syncContainerSize)
      resizeObserver?.disconnect()
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const syncMediaPreferences = () => {
      setPrefersReducedMotion(reducedMotionQuery.matches)
    }

    syncMediaPreferences()
    reducedMotionQuery.addEventListener('change', syncMediaPreferences)

    return () => {
      reducedMotionQuery.removeEventListener('change', syncMediaPreferences)
    }
  }, [])

  const wireframe = useMemo(() => {
    const { width, height } = containerSize
    if (width === 0 || height === 0) {
      return {
        horizontalLines: [] as WireLine[],
        verticalLines: [] as WireLine[],
        pulseLines: [] as WireLine[],
        horizonY: 0,
      }
    }

    const isCompact = width < 768
    const horizonY = height * (isCompact ? 0.54 : 0.46)
    const baseY = height * 0.985
    const vanishingX = width * 0.5
    const verticalCount = isCompact ? 10 : 15
    const horizontalCount = isCompact ? 8 : 10

    const verticalLines = Array.from({ length: verticalCount }, (_, index) => {
      const factor = index / (verticalCount - 1)
      const bottomX = lerp(width * -0.08, width * 1.08, factor)
      const topX = lerp(vanishingX - width * 0.17, vanishingX + width * 0.17, factor)

      return {
        id: `vertical-${index}`,
        d: `M ${bottomX} ${baseY} L ${topX} ${horizonY}`,
      }
    })

    const horizontalLines = Array.from({ length: horizontalCount }, (_, index) => {
      const factor = (index + 1) / horizontalCount
      const easedFactor = factor * factor
      const y = lerp(horizonY + 10, baseY, easedFactor)
      const leftX = lerp(vanishingX - width * 0.035, width * -0.08, factor)
      const rightX = lerp(vanishingX + width * 0.035, width * 1.08, factor)

      return {
        id: `horizontal-${index}`,
        d: `M ${leftX} ${y} L ${rightX} ${y}`,
      }
    })

    const pulseIndices = isCompact ? [2, 5, 7] : [3, 7, 11]
    const pulseLines = pulseIndices
      .map((index) => verticalLines[index])
      .filter((line): line is WireLine => Boolean(line))

    return {
      horizontalLines,
      verticalLines,
      pulseLines,
      horizonY,
    }
  }, [containerSize])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,145,178,0.12),transparent_42%),linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.62)_62%,rgba(2,6,23,0.96))]" />

      <div
        className="absolute left-[-12%] right-[-12%] rounded-full blur-3xl"
        style={{
          top: `${wireframe.horizonY - 28}px`,
          height: '150px',
          background:
            'radial-gradient(ellipse at center, rgba(34,211,238,0.2) 0%, rgba(236,72,153,0.14) 34%, transparent 72%)',
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${Math.max(containerSize.width, 1)} ${Math.max(containerSize.height, 1)}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wireframe-stroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(103, 232, 249, 0.1)" />
            <stop offset="48%" stopColor="rgba(34, 211, 238, 0.26)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0.52)" />
          </linearGradient>
          <linearGradient id="pulse-stroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(244, 114, 182, 0)" />
            <stop offset="48%" stopColor="rgba(244, 114, 182, 0.9)" />
            <stop offset="100%" stopColor="rgba(103, 232, 249, 0.72)" />
          </linearGradient>
        </defs>

        <line
          x1="0"
          y1={wireframe.horizonY}
          x2={containerSize.width}
          y2={wireframe.horizonY}
          stroke="rgba(103, 232, 249, 0.24)"
          strokeWidth="1.2"
        />

        {wireframe.horizontalLines.map((line) => (
          <path
            key={line.id}
            d={line.d}
            stroke="url(#wireframe-stroke)"
            strokeWidth="1"
            opacity="0.82"
          />
        ))}

        {wireframe.verticalLines.map((line) => (
          <path
            key={line.id}
            d={line.d}
            stroke="url(#wireframe-stroke)"
            strokeWidth="1"
            opacity="0.78"
          />
        ))}

        {!prefersReducedMotion &&
          wireframe.pulseLines.map((line, index) => (
            <motion.path
              key={`pulse-${line.id}`}
              d={line.d}
              stroke="url(#pulse-stroke)"
              strokeWidth="1.8"
              strokeDasharray="22 82"
              initial={{ strokeDashoffset: 0, opacity: 0.2 }}
              animate={{ strokeDashoffset: -156, opacity: [0.2, 1, 0.28] }}
              transition={{
                duration: 4.4 + index * 0.7,
                repeat: Infinity,
                ease: 'linear',
                delay: index * 0.8,
              }}
            />
          ))}
      </svg>

      {!prefersReducedMotion ? (
        <motion.div
          className="absolute left-[-12%] h-[28%] w-[124%] bg-[linear-gradient(180deg,transparent,rgba(125,211,252,0.02),rgba(34,211,238,0.16),transparent)] blur-xl"
          initial={{ y: `${wireframe.horizonY - containerSize.height * 0.12}px`, opacity: 0 }}
          animate={{
            y: [
              wireframe.horizonY - containerSize.height * 0.1,
              wireframe.horizonY + containerSize.height * 0.18,
            ],
            opacity: [0, 0.75, 0],
          }}
          transition={{ duration: 6.4, repeat: Infinity, ease: 'linear' }}
        />
      ) : null}

      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.08),transparent_60%),linear-gradient(180deg,transparent,rgba(2,6,23,0.72))]" />
    </div>
  )
}
