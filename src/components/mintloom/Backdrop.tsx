export function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 960" preserveAspectRatio="xMidYMid slice">
        <path
          d="M-80 260C240 160 420 460 720 380S1180 60 1560 180"
          fill="none"
          stroke="var(--gold)"
          strokeOpacity="0.28"
          strokeWidth="1"
        />
        <path
          d="M-80 700C260 640 500 880 860 800S1280 420 1560 520"
          fill="none"
          stroke="var(--gold)"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
        <path
          d="M-40 60C300 260 260 620 640 760S1180 900 1520 860"
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
        />
        <circle cx="1290" cy="760" r="300" fill="none" stroke="var(--gold)" strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="150" cy="820" r="180" fill="var(--muted)" fillOpacity="0.45" />
        <circle cx="1180" cy="120" r="140" fill="var(--muted)" fillOpacity="0.35" />
        <g fill="var(--muted-foreground)" fillOpacity="0.28">
          {Array.from({ length: 6 }).flatMap((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={1270 + c * 14} cy={90 + r * 14} r="1.3" />
            )),
          )}
        </g>
        <g fill="var(--gold)" fillOpacity="0.35">
          {Array.from({ length: 4 }).flatMap((_, r) =>
            Array.from({ length: 4 }).map((_, c) => (
              <circle key={`g-${r}-${c}`} cx={180 + c * 14} cy={470 + r * 14} r="1.3" />
            )),
          )}
        </g>
      </svg>
    </div>
  );
}
