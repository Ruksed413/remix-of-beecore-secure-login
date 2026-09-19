type P = { className?: string };

const base = "h-5 w-5";

export function SunIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2.8v2M12 19.2v2M2.8 12h2M19.2 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M18.5 5.5l-1.4 1.4M6.9 17.1l-1.4 1.4" />
      </g>
    </svg>
  );
}

export function MoonIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4.5 8 7.5 5.2L19.5 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function LockIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function EyeIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function EyeOffIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 12s3.6-5.5 8-5.5c1.2 0 2.3.3 3.3.8M20 12s-3.6 5.5-8 5.5c-1.3 0-2.5-.3-3.5-.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M9.6 9.6a3.4 3.4 0 0 0 4.8 4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m4 20 16-16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.2 5.5 5.8v5.4c0 4 2.7 7.6 6.5 9 3.8-1.4 6.5-5 6.5-9V5.8L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m9.3 12 1.9 1.9 3.5-3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function TelegramIcon({ className = "h-6 w-6" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="var(--telegram)" />
      <path
        d="M17.4 7.6 6.8 11.5c-.6.2-.6.6 0 .8l2.5.8.9 2.9c.1.4.4.5.7.2l1.5-1.4 2.7 2c.4.3.8.1.9-.4l1.6-7.9c.1-.5-.3-.8-.8-.6Z"
        fill="#fff"
      />
    </svg>
  );
}

export function SpinnerRing({ className = "h-5 w-5" }: P) {
  return (
    <span
      className={`${className} inline-block animate-spin rounded-full border-2 border-gold/30 border-t-gold`}
      aria-hidden="true"
    />
  );
}

export function GoldRing({ className = "h-5 w-5" }: P) {
  return <span className={`${className} inline-block rounded-full border-2 border-gold`} aria-hidden="true" />;
}

export function CheckCircleIcon({ className = "h-6 w-6" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8.2 12.3 2.4 2.4 5-5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function AlertCircleIcon({ className = "h-6 w-6" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.6v5.2M12 16.2v.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function InfoCircleIcon({ className = "h-6 w-6" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 11v5.4M12 7.6v.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ChartIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M6.5 15.5v3M12 9.5v9M17.5 12.5v6" />
      </g>
    </svg>
  );
}

export function UsersIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9.5" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 19c.7-2.7 2.9-4.2 5.5-4.2S14.3 16.3 15 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 7.2a2.8 2.8 0 0 1 0 5.4M17.5 14.9c1.5.6 2.6 2 3 4.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function GearIcon({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3.6v2M12 18.4v2M4.6 12h2M17.4 12h2M6.7 6.7l1.4 1.4M15.9 15.9l1.4 1.4M17.3 6.7l-1.4 1.4M8.1 15.9l-1.4 1.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
