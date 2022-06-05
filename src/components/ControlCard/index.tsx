import { useState } from "react";

import { CaretDown, CaretUp } from "phosphor-react";

import { ActionButtonControlCard } from "./ActionButtonControlCard";
import { ActionStateType } from "../../models/actionState";


interface ControlCardProps {
  robotAction: ActionStateType;
}

export function ControlCard({ robotAction }: ControlCardProps) {

  const [actionStateIndex, setActionStateIndex] = useState<number>(robotAction.stateIndex)

  function incrementActionState() {
    // incrementar se o index atual for menor que o tamanho de estados
    console.log("oi")
    if (actionStateIndex < (robotAction.states.length - 1)) {
      setActionStateIndex(actionStateIndex + 1)
      console.log(actionStateIndex + 1)
    }
  }

  function decrementActionState() {
    if (actionStateIndex > 0) {
      setActionStateIndex(actionStateIndex - 1)
    }
  }

  return (
    <div className="flex flex-col gap-3 items-center text-slate-50 bg-slate-700/25 rounded-xl not-prose overflow-hidden border border-slate-300/10 p-4">

      <ActionButtonControlCard
        id="arrow-up"
        icon={<CaretUp className="w-6 h-6" weight="bold" />}
        onClick={incrementActionState}
      />

      <span className="text-xl">{robotAction.states[actionStateIndex]}</span>

      <ActionButtonControlCard
        id="arrow-up"
        icon={<CaretDown className="w-6 h-6" weight="bold" />}
        onClick={decrementActionState}
      />
    </div>
  )
}