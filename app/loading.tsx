// app/loading.tsx
"use client";

export default function Loading({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Pasek ładowania - przypomina postęp budowy */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-neutral-200 dark:bg-white/[0.06] overflow-hidden">
        <div className="h-full bg-[#2563EB] animate-loading-expand" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/20 to-transparent animate-shimmer" />
      </div>

      {/* Przyciemnienie treści pod spodem */}
      <div className="transition-opacity duration-300">{children}</div>
    </div>
  );
}
