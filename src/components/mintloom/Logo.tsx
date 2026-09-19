export function MintLoomMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 3.4 41.8 13.7v20.6L24 44.6 6.2 34.3V13.7L24 3.4Z"
        stroke="var(--gold)"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d="M30 18.5a8 8 0 1 0 0 11"
        stroke="var(--gold)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path d="M30 24h-7" stroke="var(--gold)" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}
