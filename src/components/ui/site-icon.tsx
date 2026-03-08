import { useId } from 'react'
import { cn } from '../../lib/utils'

export type SiteIconName =
  | 'github'
  | 'linkedin'
  | 'x'
  | 'linux'
  | 'python'
  | 'identity'
  | 'support'
  | 'git'
  | 'automation'
  | 'cloud'
  | 'web'
  | 'menu'
  | 'close'
  | 'download'
  | 'location'
  | 'repo'
  | 'uptime'
  | 'external'
  | 'bullet'
  | 'back'
  | 'top'

export interface SiteIconProps extends React.SVGProps<SVGSVGElement> {
  name: SiteIconName
  decorative?: boolean
}

function FrameCorners() {
  return (
    <g opacity="0.9">
      <path d="M4 9V5h4" />
      <path d="M16 5h4v4" />
      <path d="M20 15v4h-4" />
      <path d="M8 19H4v-4" />
    </g>
  )
}

const glyphs: Record<SiteIconName, React.ReactNode> = {
  github: (
    <>
      <FrameCorners />
      <path d="M8 15V9.5h2.2v5.5" />
      <path d="M8 12h2" />
      <path d="M14 15V9.5h2.4a1.6 1.6 0 0 1 0 3.2H14" />
      <path d="M16.8 12.7 18 15" />
    </>
  ),
  linkedin: (
    <>
      <FrameCorners />
      <circle cx="8.25" cy="8.25" r="0.9" fill="currentColor" stroke="none" />
      <path d="M8.25 10.3V15" />
      <path d="M12.3 15v-4.2" />
      <path d="M16.2 15v-3.2a1.5 1.5 0 0 0-3 0" />
      <path d="M12.3 11.8v-.2" />
    </>
  ),
  x: (
    <>
      <FrameCorners />
      <path d="m7 8 10 8" />
      <path d="m17 8-10 8" />
      <path d="M9.7 6.8h4.6" opacity="0.65" />
      <path d="M9.7 17.2h4.6" opacity="0.65" />
    </>
  ),
  linux: (
    <>
      <FrameCorners />
      <path d="M9 9.2h6" />
      <path d="M10 12h4" />
      <path d="M8.8 14.8h6.4" />
      <path d="M12 8v8" opacity="0.55" />
    </>
  ),
  python: (
    <>
      <FrameCorners />
      <path d="M8.5 9.2h4a1.5 1.5 0 0 1 1.5 1.5v1.1H10a1.5 1.5 0 0 0-1.5 1.5v1.5" />
      <path d="M15.5 14.8h-4A1.5 1.5 0 0 1 10 13.3v-1.1h4a1.5 1.5 0 0 0 1.5-1.5V9.2" />
      <circle cx="11" cy="10.4" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="13" cy="13.6" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  identity: (
    <>
      <FrameCorners />
      <path d="M12 7.4 16.5 9v3.4c0 2.7-1.7 4.9-4.5 6-2.8-1.1-4.5-3.3-4.5-6V9Z" />
      <path d="m10.4 12.4 1.1 1.1 2.3-2.5" />
    </>
  ),
  support: (
    <>
      <FrameCorners />
      <path d="M8.2 11.2a3.8 3.8 0 1 1 7.6 0" />
      <path d="M8.2 11.2V14a1.8 1.8 0 0 0 1.8 1.8H11" />
      <path d="M15.8 11.2V14a1.8 1.8 0 0 1-1.8 1.8H13" />
      <path d="M11 17h2" />
    </>
  ),
  git: (
    <>
      <FrameCorners />
      <circle cx="9" cy="9" r="1.3" />
      <circle cx="15" cy="9" r="1.3" />
      <circle cx="12" cy="15" r="1.3" />
      <path d="M10.2 9h3.6" />
      <path d="M12 10.3v3.4" />
    </>
  ),
  automation: (
    <>
      <FrameCorners />
      <circle cx="12" cy="12" r="2.1" />
      <path d="M12 7.4v1.5" />
      <path d="M12 15.1v1.5" />
      <path d="M7.4 12h1.5" />
      <path d="M15.1 12h1.5" />
      <path d="m8.8 8.8 1.1 1.1" />
      <path d="m14.1 14.1 1.1 1.1" />
    </>
  ),
  cloud: (
    <>
      <FrameCorners />
      <path d="M8.5 15.8h7a2.1 2.1 0 0 0 .2-4.1A3.7 3.7 0 0 0 9 10.7a2.5 2.5 0 0 0-.5 5.1Z" />
      <path d="M10.4 15.8v-2.2" opacity="0.6" />
      <path d="M13.6 15.8v-2.2" opacity="0.6" />
    </>
  ),
  web: (
    <>
      <FrameCorners />
      <ellipse cx="12" cy="12" rx="4.8" ry="5.8" />
      <path d="M7.2 12h9.6" />
      <path d="M12 6.2c1.4 1.4 2.2 3.5 2.2 5.8S13.4 16.4 12 17.8" />
      <path d="M12 6.2C10.6 7.6 9.8 9.7 9.8 12s.8 4.4 2.2 5.8" />
    </>
  ),
  menu: (
    <>
      <FrameCorners />
      <path d="M7 8.5h10" />
      <path d="M7 12h7.4" />
      <path d="M7 15.5h10" />
    </>
  ),
  close: (
    <>
      <FrameCorners />
      <path d="m8 8 8 8" />
      <path d="m16 8-8 8" />
    </>
  ),
  download: (
    <>
      <FrameCorners />
      <path d="M12 6.5v8" />
      <path d="m8.8 11.6 3.2 3.2 3.2-3.2" />
      <path d="M7 17.5h10" />
    </>
  ),
  location: (
    <>
      <FrameCorners />
      <path d="M12 18s4-3.6 4-7.1a4 4 0 1 0-8 0c0 3.5 4 7.1 4 7.1Z" />
      <circle cx="12" cy="10.8" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  repo: (
    <>
      <FrameCorners />
      <path d="M8 8.5h8v7H8z" />
      <path d="M8 11.5h8" />
      <path d="M10 8.5V7" opacity="0.7" />
      <path d="M14 8.5V7" opacity="0.7" />
    </>
  ),
  uptime: (
    <>
      <FrameCorners />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 12V9.5" />
      <path d="m12 12 2 1.4" />
      <path d="M18 8.5h1.5" opacity="0.7" />
      <path d="M18.5 12h1" opacity="0.7" />
    </>
  ),
  external: (
    <>
      <FrameCorners />
      <path d="M9 15h6V9" />
      <path d="m10 14 5-5" />
      <path d="M11.8 9H15v3.2" />
    </>
  ),
  bullet: (
    <>
      <path d="m8 7 7 5-7 5" />
      <path d="M6 12h3" opacity="0.65" />
    </>
  ),
  back: (
    <>
      <FrameCorners />
      <path d="M16 12H8" />
      <path d="m11 9-3 3 3 3" />
    </>
  ),
  top: (
    <>
      <FrameCorners />
      <path d="M12 17V9" />
      <path d="m9 12 3-3 3 3" />
      <path d="M8 18h8" />
    </>
  ),
}

/**
 * Renders the local icon family used across controls and utility actions.
 */
export function SiteIcon({
  name,
  decorative = true,
  className,
  children,
  ...props
}: SiteIconProps) {
  const titleId = useId()
  const labelled = !decorative && typeof children === 'string'

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={decorative ? true : undefined}
      aria-labelledby={labelled ? titleId : undefined}
      className={cn('shrink-0 transition-transform duration-300 ease-out', className)}
      {...props}
    >
      {labelled ? <title id={titleId}>{children}</title> : null}
      {glyphs[name]}
    </svg>
  )
}
