import { useEffect, useState } from "react";

import { CaretDown, CaretUp } from "phosphor-react";

import { ActionButtonControlCard } from "./ActionButtonControlCard";
import { ActionStateType } from "../../models/actionState";
import { ROBOT_ACTION_PART } from "../../models/enums/robotActionPart";
import { useRobotActions } from "../../hooks/useRobotActions";
import { useChangeRobotAction } from "../../hooks/useChangeRobotActions";


interface ControlCardProps {
  robotAction: ActionStateType;
}

export function ControlCard({ robotAction }: ControlCardProps) {

  const { changeRobotAction } = useChangeRobotAction()

  const [actionStateIndex, setActionStateIndex] = useState<number>(robotAction?.stateIndex)
  const [isIncrementDisabled, setIsIncrementDisabled] = useState<boolean>(false)
  const [isDecrementDisabled, setIsDecrementDisabled] = useState<boolean>(false)

  function incrementActionState() {
    // incrementar se o index atual for menor que o tamanho de estados
    if (!!robotAction && actionStateIndex < (robotAction.states.length - 1)) {

      changeRobotAction({
        ...robotAction,
        stateIndex: actionStateIndex + 1
      })

      setActionStateIndex(actionStateIndex + 1)
    }
  }

  function decrementActionState() {
    if (!!robotAction && actionStateIndex > 0) {

      changeRobotAction({
        ...robotAction,
        stateIndex: actionStateIndex - 1
      })

      setActionStateIndex(actionStateIndex - 1)
    }
  }

  function handleDisabledActionState() {

    if (actionStateIndex === 0) {
      setIsDecrementDisabled(true)
      setIsIncrementDisabled(false)
      return
    }

    if (!(actionStateIndex < (robotAction.states.length - 1))) {
      setIsIncrementDisabled(true)
      setIsDecrementDisabled(false)
      return
    }

    setIsDecrementDisabled(false)
    setIsIncrementDisabled(false)
  }

  useEffect(() => {
    if (robotAction)
      handleDisabledActionState();
  }, [robotAction?.disabled, robotAction, actionStateIndex])


  return (
    <div className="flex flex-col gap-3 items-center text-slate-50 bg-slate-700/25 rounded-xl not-prose overflow-hidden border border-slate-300/10 p-4">

      <h3 className="align-self-start text-sm font-bold p-2 bg-brand-secondary rounded-lg">{robotAction?.title}</h3>

      <ActionButtonControlCard
        id="arrow-up"
        icon={<CaretUp className="w-6 h-6" weight="bold" />}
        onClick={decrementActionState}
        disabled={isDecrementDisabled || robotAction?.disabled}
      />

      <span className="text-xl text-slate-50">{robotAction?.states[actionStateIndex]}</span>

      <ActionButtonControlCard
        id="arrow-up"
        icon={<CaretDown className="w-6 h-6" weight="bold" />}
        onClick={incrementActionState}
        disabled={isIncrementDisabled || robotAction?.disabled}
      />
    </div>
  )
}