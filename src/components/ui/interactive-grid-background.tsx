import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '../../lib/utils'

const GRID_CELL_SIZE = 80
const BASE_STROKE = 'rgba(34, 211, 238, 0.06)'
const ACTIVE_STROKE = 'rgba(255, 0, 128, 0.58)'
const ACTIVE_FILL = 'rgba(255, 0, 128, 0.24)'
const SPOTLIGHT_COLOR = 'rgba(255, 0, 128, 0.15)'

interface ContainerSize {
  width: number
  height: number
}

const DEFAULT_SIZE: ContainerSize = {
  width: 0,
  height: 0,
}

/**
 * Props for the hero-scoped interactive grid background.
 */
export interface InteractiveGridBackgroundProps {
  /** Optional className for layout overrides in parent sections. */
  className?: string
}

/**
 * Renders a soft neon grid background bound to its parent container.
 * Interaction runs only on fine pointers; coarse/touch pointers stay static.
 */
export function InteractiveGridBackground({
  className,
}: InteractiveGridBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const spotlightRef = useRef<HTMLDivElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const lastActiveCellRef = useRef<number | null>(null)
  const isCursorInsideRef = useRef(false)
  const [containerSize, setContainerSize] = useState(DEFAULT_SIZE)
  const [activeCellIndex, setActiveCellIndex] = useState<number | null>(null)
  const [isCursorInside, setIsCursorInside] = useState(false)
  const [isFinePointer, setIsFinePointer] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const visibleActiveCellIndex = isFinePointer ? activeCellIndex : null
  const showSpotlight = isFinePointer && isCursorInside

  const isBlockedHoverPoint = (clientX: number, clientY: number) => {
    const hoveredElement = document.elementFromPoint(clientX, clientY)
    return Boolean(hoveredElement?.closest('[data-grid-active-block="true"]'))
  }

  const columns = Math.max(1, Math.ceil(containerSize.width / GRID_CELL_SIZE))
  const rows = Math.max(1, Math.ceil(containerSize.height / GRID_CELL_SIZE))
  const cellCount = columns * rows
  const viewBoxWidth = columns * GRID_CELL_SIZE
  const viewBoxHeight = rows * GRID_CELL_SIZE

  const gridCells = useMemo(() => {
    return Array.from({ length: cellCount }, (_, index) => {
      const x = (index % columns) * GRID_CELL_SIZE
      const y = Math.floor(index / columns) * GRID_CELL_SIZE
      return { index, x, y }
    })
  }, [cellCount, columns])

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

    const finePointerQuery = window.matchMedia('(pointer: fine)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const syncMediaPreferences = () => {
      setIsFinePointer(finePointerQuery.matches)
      setPrefersReducedMotion(reducedMotionQuery.matches)
    }

    syncMediaPreferences()
    finePointerQuery.addEventListener('change', syncMediaPreferences)
    reducedMotionQuery.addEventListener('change', syncMediaPreferences)

    return () => {
      finePointerQuery.removeEventListener('change', syncMediaPreferences)
      reducedMotionQuery.removeEventListener('change', syncMediaPreferences)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !isFinePointer || cellCount === 0) {
      lastActiveCellRef.current = null
      return
    }

    const clearActiveCell = () => {
      setActiveCellIndex(null)
      lastActiveCellRef.current = null
      if (isCursorInsideRef.current) {
        isCursorInsideRef.current = false
        setIsCursorInside(false)
      }
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }

      animationFrameRef.current = window.requestAnimationFrame(() => {
        const containerElement = containerRef.current
        if (!containerElement) return

        const bounds = containerElement.getBoundingClientRect()
        const localX = event.clientX - bounds.left
        const localY = event.clientY - bounds.top
        const inBounds =
          localX >= 0 &&
          localY >= 0 &&
          localX < bounds.width &&
          localY < bounds.height
        const isBlockedZone = isBlockedHoverPoint(event.clientX, event.clientY)
        const canActivateCell = inBounds && !isBlockedZone

        const spotlightElement = spotlightRef.current
        if (spotlightElement) {
          spotlightElement.style.setProperty('--spotlight-x', `${localX}px`)
          spotlightElement.style.setProperty('--spotlight-y', `${localY}px`)
        }
        if (canActivateCell !== isCursorInsideRef.current) {
          isCursorInsideRef.current = canActivateCell
          setIsCursorInside(canActivateCell)
        }

        const nextCellIndex = canActivateCell
          ? Math.floor(localY / GRID_CELL_SIZE) * columns +
            Math.floor(localX / GRID_CELL_SIZE)
          : null

        if (nextCellIndex !== lastActiveCellRef.current) {
          lastActiveCellRef.current = nextCellIndex
          setActiveCellIndex(nextCellIndex)
        }

        animationFrameRef.current = null
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('blur', clearActiveCell)
    document.addEventListener('mouseleave', clearActiveCell)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('blur', clearActiveCell)
      document.removeEventListener('mouseleave', clearActiveCell)
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [cellCount, columns, isFinePointer])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="none"
      >
        {gridCells.map((cell) => {
          const isActive = visibleActiveCellIndex === cell.index
          const transitionDuration = prefersReducedMotion ? 90 : isActive ? 180 : 720

          return (
            <rect
              key={cell.index}
              x={cell.x}
              y={cell.y}
              width={GRID_CELL_SIZE}
              height={GRID_CELL_SIZE}
              fill={isActive ? ACTIVE_FILL : 'transparent'}
              stroke={isActive ? ACTIVE_STROKE : BASE_STROKE}
              strokeWidth={1}
              className="transition-[fill,stroke] ease-out"
              style={{ transitionDuration: `${transitionDuration}ms` }}
            />
          )
        })}
      </svg>
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -inset-px z-[1] transition-opacity duration-300"
        style={{
          opacity: showSpotlight ? 1 : 0,
          background: `radial-gradient(600px circle at var(--spotlight-x, -1000px) var(--spotlight-y, -1000px), ${SPOTLIGHT_COLOR}, transparent 40%)`,
        }}
      />
    </div>
  )
}
