import { ActionStateType } from "./actionState";
import { ROBOT_ACTION_PART } from "./enums/robotActionPart";

export function getNewRightElbow(): ActionStateType {
  return {
    title: "Cotovelo Direito",
    robotActionPart: ROBOT_ACTION_PART.RIGHT_ELBOW,
    states: [
      'Em Repouso',
      'Levemente contraído',
      'Contraído',
      'Fortemente contraído',
    ],
    stateIndex: 0,
    disabled: false,
  }
}

export function getRightElbow(): ActionStateType {
  const action = localStorage.getItem(ROBOT_ACTION_PART.RIGHT_ELBOW)

  if (action)
    return JSON.parse(action) as ActionStateType

  return getNewRightElbow()
}