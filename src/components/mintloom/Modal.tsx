import { useEffect } from "react";
import { AlertCircleIcon, CheckCircleIcon, InfoCircleIcon } from "./icons";

export type ModalKind = "success" | "error" | "info";

export type ModalState = {
  kind: ModalKind;
  title: string;
  message: string;
} | null;

const tone: Record<ModalKind, string> = {
  success: "text-gold",
  error: "text-destructive",
  info: "text-telegram",
};

export function Modal({ state, onClose }: { state: ModalState; onClose: () => void }) {
  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state, onClose]);

  if (!state) return null;

  const Icon =
    state.kind === "success" ? CheckCircleIcon : state.kind === "error" ? AlertCircleIcon : InfoCircleIcon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/15 px-5 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xs rounded-2xl border border-border/70 bg-card p-6 text-center shadow-card"
      >
        <span className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-muted ${tone[state.kind]}`}>
          <Icon />
        </span>
        <h2 className="text-base font-semibold tracking-tight">{state.title}</h2>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{state.message}</p>
        <button
          onClick={onClose}
          className="mt-5 h-10 w-full rounded-full bg-navy text-sm font-medium text-navy-foreground transition-opacity hover:opacity-90"
        >
          Close
        </button>
      </div>
    </div>
  );
}
