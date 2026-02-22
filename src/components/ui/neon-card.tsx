import { useState } from 'react'
import { motion } from 'motion/react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const neonCardVariants = cva(
  'relative group bg-slate-900/80 backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 overflow-hidden',
  {
    variants: {
      glowColor: {
        cyan: "shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] max-md:data-[active='true']:shadow-[0_0_50px_rgba(0,255,255,0.5)] border-cyan-500/30",
        pink: "shadow-[0_0_30px_rgba(255,0,128,0.3)] hover:shadow-[0_0_50px_rgba(255,0,128,0.5)] max-md:data-[active='true']:shadow-[0_0_50px_rgba(255,0,128,0.5)] border-pink-500/30",
      },
    },
    defaultVariants: {
      glowColor: 'cyan',
    },
  }
)

const spotlightMap = {
  cyan: 'rgba(0, 255, 255, 0.15)',
  pink: 'rgba(255, 0, 128, 0.15)',
}

export interface NeonCardProps
  extends React.ComponentPropsWithoutRef<typeof motion.div>,
    VariantProps<typeof neonCardVariants> {
  children?: React.ReactNode
}

export function NeonCard({ 
  children, 
  glowColor = 'cyan',
  className,
  ...props
}: NeonCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(neonCardVariants({ glowColor, className }))}
      {...props}
    >
      {/* Spotlight Effect */}
      {isHovered && glowColor && (
        <div 
          className="pointer-events-none absolute -inset-px transition duration-300 z-0 opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightMap[glowColor]}, transparent 40%)`
          }}
        />
      )}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  )
}
