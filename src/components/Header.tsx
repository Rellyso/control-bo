import { Robot } from "phosphor-react";

export function Header() {
  return (
    <header className="flex items-center justify-center h-20 p-2 text-slate-50 border-b border-slate-300/10">
      <div className="text-5xl font-semibold select-none ">
        control
        <span className="text-brand-secondary">.bo</span>
        <Robot className="inline w-8 h-8 text-brand-secondary ml-1" />
      </div>

    </header>
  )
}