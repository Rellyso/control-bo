import { ReactNode, useEffect, useState } from "react"
import { createContext } from "use-context-selector"
import { ActionStateType } from "../models/actionState"
import { ROBOT_ACTION_PART } from "../models/enums/robotActionPart";
import { getHeadInclination } from "../models/headInclination";
import { getHeadRotation } from "../models/headRotation";
import { getLeftElbow } from "../models/leftElbow";
import { getLeftPulse } from "../models/leftPulse";
import { getRightElbow } from "../models/rightElbow";
import { getRightPulse } from "../models/rightPulse";


type RobotActionsProviderData = {
  leftElbow: ActionStateType;
  rightElbow: ActionStateType;
  leftPulse: ActionStateType;
  rightPulse: ActionStateType;
  headRotation: ActionStateType;
  headInclination: ActionStateType;
  changeRobotActionState: (
    newRobotActionState: ActionStateType
  ) => void
}


export const RobotActionsContext = createContext({} as RobotActionsProviderData)

type RobotActionsProviderProps = {
  children: ReactNode
}
export const RobotActionsProvider = ({ children }: RobotActionsProviderProps) => {

  const [leftElbow, setLeftElbow] = useState<ActionStateType>(getLeftElbow())
  const [rightElbow, setRightElbow] = useState<ActionStateType>(getRightElbow())
  const [leftPulse, setLeftPulse] = useState<ActionStateType>(getLeftPulse())
  const [rightPulse, setRightPulse] = useState<ActionStateType>(getRightPulse())
  const [headRotation, setHeadRotation] = useState<ActionStateType>(getHeadRotation())
  const [headInclination, setHeadInclination] = useState<ActionStateType>(getHeadInclination())

  // criar useEffect para adicionar restrições de movimentos
  useEffect(() => {
    handleLeftPulse();
    handleRightPulse();
    handleHeadRotation();
  }, [leftElbow, rightElbow, headInclination])


  function changeRobotActionState(newRobotActionState: ActionStateType) {

    // modificar estado
    switch (newRobotActionState.robotActionPart) {
      case ROBOT_ACTION_PART.LEFT_ELBOW:
        setLeftElbow(() => (newRobotActionState))
        break;

      case ROBOT_ACTION_PART.RIGHT_ELBOW:
        setRightElbow(() => (newRobotActionState))
        break;

      case ROBOT_ACTION_PART.LEFT_PULSE:
        setLeftPulse(() => (newRobotActionState))
        break;

      case ROBOT_ACTION_PART.RIGHT_PULSE:
        setRightPulse(() => (newRobotActionState))
        break;

      case ROBOT_ACTION_PART.HEAD_ROTATION:
        setHeadRotation(() => (newRobotActionState))
        break;

      case ROBOT_ACTION_PART.HEAD_INCLINATION:
        setHeadInclination(() => (newRobotActionState))
        break;

      default:
        break;
    }

    // adicionar ao armazenamento local
    localStorage.setItem(newRobotActionState.robotActionPart, JSON.stringify(newRobotActionState))
  }

  function handleLeftPulse() {
    let newLeftPulse = leftPulse

    let isStrongContractedLeftElbow =
      leftElbow.states[leftElbow.stateIndex] === leftElbow.states.find(state => state === "Fortemente contraído")


    if (isStrongContractedLeftElbow) {
      newLeftPulse.disabled = false
    }

    if (!isStrongContractedLeftElbow) {
      newLeftPulse.disabled = true
    }

    changeRobotActionState(newLeftPulse)
  }

  function handleRightPulse() {
    let newRightPulse = rightPulse

    let isStrongContractedRightElbow =
      rightElbow.states[rightElbow.stateIndex] === rightElbow.states.find(state => state === "Fortemente contraído")


    if (isStrongContractedRightElbow) {
      newRightPulse.disabled = false
    }

    if (!isStrongContractedRightElbow) {
      newRightPulse.disabled = true
    }

    changeRobotActionState(newRightPulse)
  }

  function handleHeadRotation() {
    let newHeadRotation = headRotation

    let canRotateHead =
      headInclination.states[headInclination.stateIndex] === headInclination.states.find(state => state === "Para baixo")

    console.log(canRotateHead)

    if (canRotateHead) {
      newHeadRotation.disabled = true
    }

    if (!canRotateHead) {
      newHeadRotation.disabled = false
    }

    changeRobotActionState(newHeadRotation)
  }

  return (
    <RobotActionsContext.Provider
      value={{
        leftElbow: leftElbow,
        rightElbow: rightElbow,
        leftPulse: leftPulse,
        rightPulse: rightPulse,
        headRotation: headRotation,
        headInclination: headInclination,
        changeRobotActionState: changeRobotActionState
      }}
    >
      {children}
    </RobotActionsContext.Provider >
  )
}