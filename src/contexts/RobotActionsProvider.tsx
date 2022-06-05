import { createContext, ReactNode, useState } from "react"
import { ActionStateType } from "../models/actionState"
import { ROBOT_ACTION_PART } from "../models/enums/robotActionPart";
import { getNewLeftElbow } from "../models/leftElbow";

type ChangeRobotActionStateProps = {
  newStateIndex: number,
  robotActionPart: ROBOT_ACTION_PART,
}

type RobotActionsProviderData = {
  leftElbow: ActionStateType;
  rightElbow: ActionStateType;
  leftPulse: ActionStateType;
  rightPulse: ActionStateType;
  headRotation: ActionStateType;
  headInclination: ActionStateType;
  changeRobotActionState: ({
    newStateIndex,
    robotActionPart
  }: ChangeRobotActionStateProps) => void
}


export const RobotActionsContext = createContext({} as RobotActionsProviderData)

type RobotActionsProviderProps = {
  children: ReactNode
}
export const RobotActionsProvider = ({ children }: RobotActionsProviderProps) => {

  const [leftElbow, setLeftElbow] = useState<ActionStateType>(getNewLeftElbow())
  const [rightElbow, setRightElbow] = useState<ActionStateType>(getNewLeftElbow())
  const [leftPulse, setLeftPulse] = useState<ActionStateType>(getNewLeftElbow())
  const [rightPulse, setRightPulse] = useState<ActionStateType>(getNewLeftElbow())
  const [headRotation, setHeadRotation] = useState<ActionStateType>(getNewLeftElbow())
  const [headInclination, setHeadInclination] = useState<ActionStateType>(getNewLeftElbow())

  // criar useEffect para recuperar estados salvos


  // criar useEffect para adicionar restrições de movimentos

  function changeRobotActionState({ newStateIndex, robotActionPart }: ChangeRobotActionStateProps) {
    switch (robotActionPart) {
      case ROBOT_ACTION_PART.LEFT_ELBOW:
        setLeftElbow({
          ...leftElbow,
          stateIndex: newStateIndex
        })
        break;

      case ROBOT_ACTION_PART.RIGHT_ELBOW:
        setRightElbow({
          ...rightElbow,
          stateIndex: newStateIndex
        })
        break;

      case ROBOT_ACTION_PART.LEFT_PULSE:
        setLeftPulse({
          ...leftPulse,
          stateIndex: newStateIndex
        })
        break;

      case ROBOT_ACTION_PART.RIGHT_PULSE:
        setRightPulse({
          ...rightPulse,
          stateIndex: newStateIndex
        })
        break;

      case ROBOT_ACTION_PART.HEAD_ROTATION:
        setHeadRotation({
          ...headRotation,
          stateIndex: newStateIndex
        })
        break;

      case ROBOT_ACTION_PART.HEAD_INCLINATION:
        setHeadInclination({
          ...headInclination,
          stateIndex: newStateIndex
        })
        break;
    }
  }

  return (
    <RobotActionsContext.Provider
      value={{
        leftElbow,
        rightElbow,
        leftPulse,
        rightPulse,
        headRotation,
        headInclination,
        changeRobotActionState
      }}
    >
      {children}
    </RobotActionsContext.Provider >
  )
}