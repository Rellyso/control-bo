import { ActionStateType } from "./actionState";
import { ROBOT_ACTION_PART } from "./enums/robotActionPart";

export function getNewLeftElbow(): ActionStateType {
  return {
    title: "Cotovelo Esquerdo",
    robotActionPart: ROBOT_ACTION_PART.LEFT_ELBOW,
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

export function getLeftElbow(): ActionStateType {
  const action = localStorage.getItem(ROBOT_ACTION_PART.LEFT_ELBOW)

  if (action)
    return JSON.parse(action) as ActionStateType

  return getNewLeftElbow()
}