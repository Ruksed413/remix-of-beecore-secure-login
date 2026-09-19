import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Backdrop } from "@/components/mintloom/Backdrop";
import { MintLoomMark } from "@/components/mintloom/Logo";
import { Modal, type ModalState } from "@/components/mintloom/Modal";
import {
  ChartIcon,
  EyeIcon,
  EyeOffIcon,
  GearIcon,
  GoldRing,
  LockIcon,
  MailIcon,
  MoonIcon,
  ShieldIcon,
  SpinnerRing,
  SunIcon,
  TelegramIcon,
  UsersIcon,
} from "@/components/mintloom/icons";
import { useTheme } from "@/lib/theme";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MintLoom Admin Panel — Sign in" },
      {
        name: "description",
        content: "Sign in to the MintLoom admin panel to manage campaigns, track performance and configure your workspace.",
      },
      { property: "og:title", content: "MintLoom Admin Panel — Sign in" },
      {
        property: "og:description",
        content: "Secure access to the MintLoom admin panel for campaign management and performance tracking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function LoginPage() {
  const { theme, setTheme, toggleTheme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<ModalState>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (!email.trim() || !password.trim()) {
      setModal({ kind: "error", title: "Missing details", message: "Please enter both your email address and password." });
      return;
    }
    if (!emailPattern.test(email.trim())) {
      setModal({ kind: "error", title: "Invalid email", message: "That email address doesn't look right. Please check it." });
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setModal({ kind: "success", title: "Login Successful", message: "Welcome back. Your session is ready." });
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-background">
      <Backdrop />

      <header className="fixed inset-x-0 top-0 z-20 border-b border-glass-border bg-glass/70 backdrop-blur-xl">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-2 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <MintLoomMark className="h-6 w-6 shrink-0" />
            <span className="truncate text-base font-bold tracking-tight">MintLoom</span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="hidden truncate text-sm text-muted-foreground sm:block">Admin Panel</span>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <nav className="hidden items-center gap-2 text-sm text-muted-foreground lg:flex">
              <span>Build</span>
              <span className="text-gold">•</span>
              <span>Manage</span>
              <span className="text-gold">•</span>
              <span>Grow</span>
            </nav>
            <div className="flex items-center gap-2.5">
              <SunIcon className={`h-5 w-5 ${theme === "light" ? "text-foreground" : "text-muted-foreground"}`} />
              <button
                onClick={toggleTheme}
                role="switch"
                aria-checked={theme === "dark"}
                aria-label="Toggle dark mode"
                className="relative h-6 w-11 rounded-full bg-gold transition-colors"
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-soft transition-all duration-300 ${
                    theme === "dark" ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>
              <button
                onClick={() => setTheme("dark")}
                aria-label="Use dark theme"
                className={theme === "dark" ? "text-foreground" : "text-muted-foreground"}
              >
                <MoonIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 pb-12 pt-24 lg:grid-cols-[1fr_minmax(0,480px)_1fr] lg:gap-6 lg:pb-16 lg:pt-28">
        <section className="hidden max-w-xs flex-col lg:flex">
          <span className="mb-6 block h-px w-8 bg-gold" />
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight">
            Welcome
            <br />
            Back
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Access your dashboard and keep things moving.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { icon: ChartIcon, label: "Manage Campaigns" },
              { icon: UsersIcon, label: "Track Performance" },
              { icon: GearIcon, label: "Control & Configure" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground/70">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <span className="mb-3 block h-px w-8 bg-gold" />
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              &ldquo;Small steps build
              <br />
              big results.&rdquo;
            </p>
          </div>
        </section>

        <section className="w-full rounded-[26px] border border-glass-border bg-glass p-7 shadow-card backdrop-blur-2xl sm:p-10">
          <div className="flex flex-col items-center text-center">
            <MintLoomMark className="h-14 w-14" />
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">MintLoom</h2>
            <p className="mt-1 text-[15px] text-muted-foreground">Admin Panel</p>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <div className="flex w-full items-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/70" />
              <LockIcon className="h-4 w-4 text-foreground/70" />
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/70" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Sign in to continue</p>
          </div>

          <form onSubmit={submit} className="mt-6 space-y-3.5" noValidate>
            <div className="flex items-center gap-3 rounded-full border border-border bg-field px-5 py-3.5 transition-colors focus-within:border-gold">
              <MailIcon className="h-5 w-5 shrink-0 text-foreground/70" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                autoComplete="email"
                maxLength={255}
                className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex items-center gap-3 rounded-full border border-border bg-field px-5 py-3.5 transition-colors focus-within:border-gold">
              <LockIcon className="h-5 w-5 shrink-0 text-foreground/70" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="current-password"
                maxLength={128}
                className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={() => setRemember((v) => !v)}
                className="flex items-center gap-2.5 text-sm text-foreground/80"
                role="checkbox"
                aria-checked={remember}
              >
                <span
                  className={`flex h-[18px] w-[18px] items-center justify-center rounded-[6px] border transition-colors ${
                    remember ? "border-gold bg-gold" : "border-border bg-field"
                  }`}
                >
                  {remember && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                      <path d="m5 12.5 4.5 4.5L19 7" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
                Remember me
              </button>
              <button
                type="button"
                onClick={() =>
                  setModal({
                    kind: "info",
                    title: "Password reset",
                    message: "Password recovery isn't connected yet. Contact your administrator.",
                  })
                }
                className="text-sm font-medium text-gold"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex h-[54px] w-full items-center justify-center gap-3 rounded-full bg-navy text-[15px] font-semibold text-navy-foreground shadow-soft transition-opacity hover:opacity-95 disabled:opacity-90"
            >
              {loading ? <SpinnerRing className="h-5 w-5" /> : <GoldRing className="h-5 w-5" />}
              {loading ? "Signing in" : "Sign In"}
            </button>
          </form>

          <div className="my-5 flex items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">OR</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            onClick={() =>
              setModal({
                kind: "info",
                title: "Telegram sign-in",
                message: "Telegram authentication is not connected yet.",
              })
            }
            className="flex h-[54px] w-full items-center justify-center gap-3 rounded-full border border-telegram/70 bg-field text-[15px] font-semibold text-telegram transition-colors hover:border-telegram"
          >
            <TelegramIcon className="h-6 w-6" />
            Continue with Telegram
          </button>

          <p className="mt-6 flex items-center justify-center gap-2 text-center text-[13px] text-muted-foreground">
            <ShieldIcon className="h-4 w-4 shrink-0" />
            Only authorized personnel can access this panel.
          </p>
        </section>

        <aside className="hidden flex-col items-end justify-between self-stretch py-4 lg:flex">
          <div className="text-right">
            <span className="mb-3 ml-auto block h-px w-6 bg-gold" />
            <p className="text-[11px] font-medium leading-6 tracking-[0.22em] text-muted-foreground">
              SIMPLE
              <br />
              TOOLS
              <br />
              BIGGER
              <br />
              POSSIBILITIES
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] tracking-wide text-muted-foreground">v1.0.0</p>
            <span className="mt-2 ml-auto block h-px w-6 bg-gold" />
          </div>
        </aside>
      </main>

      <Modal state={modal} onClose={() => setModal(null)} />
    </div>
  );
}
