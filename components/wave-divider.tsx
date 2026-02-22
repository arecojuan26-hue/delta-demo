export function WaveDivider({ from = "white", to = "white" }: { from?: string; to?: string }) {
  return (
    <div className="pointer-events-none relative -my-px h-12 w-full overflow-hidden lg:h-16" aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0 30C360 60 720 0 1080 40C1260 55 1380 30 1440 20V80H0V30Z"
          fill={to}
        />
        <rect width="1440" height="30" fill={from} />
      </svg>
    </div>
  )
}
