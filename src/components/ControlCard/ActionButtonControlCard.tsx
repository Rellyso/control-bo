import { CaretUp, Icon } from "phosphor-react"
import { ReactNode } from "react"

type ActionButtonControlCardTypes = {
  icon: ReactNode;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export function ActionButtonControlCard({ icon, onClick, id, disabled = false }: ActionButtonControlCardTypes) {
  return (
    <button
      onClick={onClick}
      id={id}
      className="text-slate-50 flex w-full items-center justify-center hover:bg-slate-600/25 p-2 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:text-zinc-600/25 disabled:hover:bg-slate-700/25 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {icon}
    </button>
  )
}